'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type WeLoveOurWorkProps = {
  lng: string;
};

const WeLoveOurWork: FC<WeLoveOurWorkProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'about_us');

  return (
    <section className={styles.section}>
      <p>We Love Our Work</p>
    </section>
  );
};

export { WeLoveOurWork };
