'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type ReviewsProps = {
  lng: string;
};

const Reviews: FC<ReviewsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return <div className={styles.reviews}>Reviews</div>;
};

export { Reviews };
