'use client';
import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Button, MenuSelect } from '@styled';

// Translation
import { useTranslation } from '@i18n/client';

// Helpers
import useOutsideClick from '@helpers/useOutsideClick';

// SVG
import ArrowSVG from '../../../public/arrow.svg';

import styles from './index.module.scss';

type HeaderProps = {
  lng: string;
};

const Header: FC<HeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');

  const [isBgWhite, setIsBgWhite] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setIsBgWhite(window.pageYOffset > 800)
      );
    }
  }, []);

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const ref_lng = useOutsideClick(() => {
    setIsLangMenuOpen(false);
  });

  return (
    <header
      className={`${styles.header} ${isBgWhite ? styles.header_white : ''}`}
    >
      <div className={styles.header_content}>
        <div className={styles.logo_container}>
          {isBgWhite ? (
            <Image src="/logo_orange.png" alt="logo" width={105} height={105} />
          ) : (
            <Image src="/logo_white.png" alt="logo" width={105} height={105} />
          )}
        </div>
        <div className={styles.nav_container}>
          <div className={styles.nav_lang} ref={ref_lng}>
            <span onClick={toggleLangMenu}>
              <p>Укр</p>
              <ArrowSVG
                fill={isBgWhite ? '#111' : 'white'}
                className={`${styles.arrow} ${
                  isLangMenuOpen ? styles.arrow_open : ''
                }`}
              />
            </span>
            <MenuSelect className={styles.lang_select} isOpen={isLangMenuOpen}>
              <div>
                <Link
                  href={`/ua`}
                  className={`link ${lng === 'ua' ? 'link_active' : ''}`}
                  onClick={toggleLangMenu}
                >
                  Українська
                </Link>
                <Link
                  href={`/ru`}
                  className={`link ${lng === 'ru' ? 'link_active' : ''}`}
                  onClick={toggleLangMenu}
                >
                  Русский
                </Link>
              </div>
            </MenuSelect>
          </div>
          <nav>
            <ul>
              <li>
                <Link href={`${lng}/#`} className={`link ${styles.nav_link}`}>
                  {t('menu_item_1')}
                </Link>
              </li>
              <li>
                <Link href={`${lng}/#`} className={`link ${styles.nav_link}`}>
                  {t('menu_item_2')}
                </Link>
              </li>
              <li>
                <Link href={`${lng}/#`} className={`link ${styles.nav_link}`}>
                  {t('menu_item_3')}
                </Link>
              </li>
              <li>
                <Link href={`${lng}/#`} className={`link ${styles.nav_link}`}>
                  {t('menu_item_4')}
                </Link>
              </li>
              <li>
                <Link href={`${lng}/#`} className={`link ${styles.nav_link}`}>
                  {t('menu_item_5')}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.nav_contact}>
            <span>
              <p>{t('number_kyivstar')}</p>
              <ArrowSVG fill={isBgWhite ? '#111' : 'white'} />
            </span>
          </div>
        </div>
      </div>
      <Button className={styles.button}>{t('header_button')}</Button>
    </header>
  );
};

export { Header };
