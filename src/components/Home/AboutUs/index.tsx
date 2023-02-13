'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

// Icons
import FullArrowSVG from '/public/full_arrow.svg';

import styles from './index.module.scss';

type AboutUsProps = {
  lng: string;
};

const AboutUs: FC<AboutUsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <section className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.bg_left}></div>
        <div className={styles.bg_right}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <Image
            src="/about_us.png"
            alt="about us img"
            width={518}
            height={600}
            className={styles.content_img}
          />
          <div className={styles.img_description}>
            {t('about_us_img_description')}
          </div>
        </div>
        <div className={styles.text}>
          <h1>&#128075; {t('about_us_title')}</h1>
          <p>{t('about_us_description')}</p>
          <Link href={'/#'} className={`link ${styles.button}`}>
            {t('about_us_button')}
            <FullArrowSVG fill="#111" className={styles.arrow_icon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
