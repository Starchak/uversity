'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type WhyUsProps = {
  lng: string;
};

const WhyUs: FC<WhyUsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <section className={styles.why_us}>
      <h2>{t('why_us_title')}</h2>
      <p>
        &#127758; {t('why_us_earth')} &#128203; {t('why_us_notepad')} ⚜️
        {t('why_us_fr')} &#128116; {t('why_us_person')} <br /> &#127881;{' '}
        {t('why_us_celebration')}
      </p>
    </section>
  );
};

export { WhyUs };
