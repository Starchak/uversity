'use client';
import React, { FC } from 'react';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type CardProps = {
  lng: string;
  review: Review;
};

const Card: FC<CardProps> = ({ review, lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <Image
          src={review.img}
          alt="review image"
          width={320}
          height={600}
          className={styles.content_img}
        />
      </div>
      <div className={styles.right}>
        <p className={styles.name}>{t(review.name)}</p>
        <div className={styles.university}>
          <p>{t(review.university)}</p>
        </div>
        <p className={styles.text}>{t(review.text)}</p>
      </div>
    </div>
  );
};

export { Card };
