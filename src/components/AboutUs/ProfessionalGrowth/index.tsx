'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type ProfessionalGrowthProps = {
  lng: string;
};

const ProfessionalGrowth: FC<ProfessionalGrowthProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'about_us');

  return (
    <section className={styles.section}>
      <p>Professional Growth</p>
    </section>
  );
};

export { ProfessionalGrowth };
