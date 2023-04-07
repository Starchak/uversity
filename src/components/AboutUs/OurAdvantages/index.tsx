'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type OurAdvantagesProps = {
  lng: string;
};

const OurAdvantages: FC<OurAdvantagesProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'about_us');

  return (
    <section className={styles.section}>
      <p>Our Advantages</p>
    </section>
  );
};

export { OurAdvantages };
