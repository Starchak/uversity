'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type HowWeWorkProps = {
  lng: string;
};

const HowWeWork: FC<HowWeWorkProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return <div className={styles.how_we_work}>HowWeWork</div>;
};

export { HowWeWork };
