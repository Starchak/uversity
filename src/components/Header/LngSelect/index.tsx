'use client';
import React, { FC, useState } from 'react';
import Link from 'next/link';

// Components
import { MenuSelect } from '@styled';

// Helpers
import useOutsideClick from '@helpers/useOutsideClick';

// SVG
import ArrowSVG from '/public/arrow.svg';

import styles from './index.module.scss';

type LngSelectProps = {
  lng: string;
  isBgWhite: boolean;
};

const LngSelect: FC<LngSelectProps> = ({ lng, isBgWhite }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const refLng = useOutsideClick(() => {
    setIsLangMenuOpen(false);
  });

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  return (
    <div className={styles.nav_lang} ref={refLng}>
      <span onClick={toggleLangMenu}>
        <p style={{ color: isBgWhite ? '#111' : '#fff' }}>
          {lng === 'ua' ? 'Укр' : 'Рус'}
        </p>
        <ArrowSVG
          fill={isBgWhite ? '#111' : '#fff'}
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
  );
};

export { LngSelect };
