'use client';
import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Button, MenuSelect } from '@styled';
import { LngSelect } from '../LngSelect';

// Translation
import { useTranslation } from '@i18n/client';

// Helpers
import useOutsideClick from '@helpers/useOutsideClick';

// SVG
import ArrowSVG from '../../../../public/arrow.svg';

import styles from './index.module.scss';

type DesktopHeaderProps = {
  lng: string;
};

const DesktopHeader: FC<DesktopHeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');

  const [isBgWhite, setIsBgWhite] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  const refContacts = useOutsideClick(() => {
    setIsContactMenuOpen(false);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setIsBgWhite(window.pageYOffset > 800)
      );
    }
  }, []);

  const toggleContactMenu = () => {
    setIsContactMenuOpen(!isContactMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isBgWhite ? styles.header_white : ''}`}
    >
      <div className={styles.header_content}>
        <div className={styles.logo_container}>
          <Link href={`/${lng}`}>
            {isBgWhite ? (
              <Image
                src="/logo_orange.png"
                alt="logo"
                width={105}
                height={105}
              />
            ) : (
              <Image
                src="/logo_white.png"
                alt="logo"
                width={105}
                height={105}
              />
            )}
          </Link>
        </div>
        <div className={styles.nav_container}>
          <LngSelect lng={lng} isBgWhite={isBgWhite} />
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
          <div className={styles.nav_contact} ref={refContacts}>
            <span onClick={toggleContactMenu}>
              <p>{t('number_kyivstar')}</p>
              <ArrowSVG
                fill={isBgWhite ? '#111' : 'white'}
                className={`${styles.arrow} ${
                  isContactMenuOpen ? styles.arrow_open : ''
                }`}
              />
            </span>
            <MenuSelect
              className={styles.contacts_select}
              isOpen={isContactMenuOpen}
            >
              <div>
                <p className={styles.subtitle}>Kyivstar</p>
                <a
                  href={`tel:${t('number_kyivstar')}`}
                  className={styles.contact_title}
                >
                  {t('number_kyivstar')}
                </a>
                <p className={styles.subtitle}>Lifecell</p>
                <a
                  href={`tel:${t('number_lifecell')}`}
                  className={styles.contact_title}
                >
                  {t('number_lifecell')}
                </a>
                <div>
                  <p className={styles.subtitle}>{t('contact_we_close')}</p>
                  <div className={styles.contact_btns}>
                    <a href="#">
                      <Image
                        src="/meta_circle.png"
                        alt="Messenger"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/tg_circle.png"
                        alt="Telegram"
                        width={50}
                        height={50}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/viber_circle.png"
                        alt="Viber"
                        width={50}
                        height={50}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </MenuSelect>
          </div>
        </div>
        <div className={styles.btn_container}>
          <Button className={styles.button}>{t('header_button')}</Button>
        </div>
      </div>
    </header>
  );
};

export { DesktopHeader };
