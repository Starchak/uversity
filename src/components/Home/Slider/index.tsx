'use client';
import React, { FC } from 'react';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type SliderProps = {
  lng: string;
};

const Slider: FC<SliderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <section className={styles.slider}>
      <Image
        src="/bg_home_slider.png"
        alt="Slider Graphic"
        fill={true}
        className={styles.image_container}
      />
      <div className={styles.slider_content}>
        <div className={styles.left} />
        <div className={styles.middle}>
          <div className={styles.middle_line} />
          <h1 className={styles.title}>{t('slider_heading')}</h1>
        </div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
};

export { Slider };
