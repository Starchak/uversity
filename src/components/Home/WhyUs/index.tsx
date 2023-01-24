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
    <div className={styles.why_us}>
      <div className={styles.title}>Чому обирають Uversity?</div>
      <div className={styles.subtitle}>
        <div> Ми допоможемо вступити у виші будь-якої країни світу, </div>
        <div> Подамо на можливі стипендії та знижки,</div>
        <div> Підберемо гранти та стипендії,</div>
        <div> Знайдемо програми для студентів у віці 30+,</div>
        <div> А 100% наших студентів отримують умовне зарахування!</div>
      </div>
    </div>
  );
};

export { WhyUs };
