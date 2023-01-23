'use client';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Button, MenuSelect } from '@styled';

// Translation
import { useTranslation } from '@i18n/client';

// Helpers
import useOutsideClick from '@helpers/useOutsideClick';

import styles from './index.module.scss';

type HeaderProps = {
  lng: string;
};

const Header: FC<HeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const ref_lng = useOutsideClick(() => {
    setIsLangMenuOpen(false);
  });

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.logo_container}>
          <Image src="/logo_white.png" alt="logo" width={105} height={105} />
        </div>
        <div className={styles.nav_container}>
          <div className={styles.nav_lang} ref={ref_lng}>
            <span onClick={toggleLangMenu}>
              <p>Укр</p>
              <Image
                src="/down_arrow.svg"
                alt="down_arrow"
                width={9.9}
                height={5.66}
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
              <li>{t('menu_item_1')}</li>
              <li>{t('menu_item_2')}</li>
              <li>{t('menu_item_3')}</li>
              <li>{t('menu_item_4')}</li>
              <li>{t('menu_item_5')}</li>
            </ul>
          </nav>
          <div className={styles.nav_contact}>
            <span>
              <p>{t('number_kyivstar')}</p>
              <Image
                src="/down_arrow.svg"
                alt="down_arrow"
                width={9.9}
                height={5.66}
              />
            </span>
          </div>
        </div>
      </div>
      <Button className={styles.button}>{t('header_button')}</Button>
    </header>
  );
};

export { Header };
