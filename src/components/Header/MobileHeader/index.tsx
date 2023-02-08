'use client';
import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Button } from '@styled';
import { LngSelect } from '../LngSelect';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type MobileHeaderProps = {
  lng: string;
};

const MobileHeader: FC<MobileHeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');

  const [isBgWhite, setIsBgWhite] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setIsBgWhite(window.pageYOffset > 800)
      );
    }
  }, []);

  return (
    <header
      className={`${styles.mobile_header} ${
        isBgWhite ? styles.mobile_header_white : ''
      }`}
    >
      <div className={styles.logo_container}>
        <Link href={`/${lng}`}>
          {isBgWhite ? (
            <Image src="/logo_orange.png" alt="logo" width={52} height={52} />
          ) : (
            <Image src="/logo_white.png" alt="logo" width={52} height={52} />
          )}
        </Link>
      </div>
      <div className={styles.header_content}>
        <LngSelect lng={lng} isBgWhite={isBgWhite} />
      </div>
      <Button className={styles.button}>{t('header_button')}</Button>
    </header>
  );
};

export { MobileHeader };
