'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type StepProps = {
  step: Step;
  lng: string;
};

const Step: FC<StepProps> = ({ step, lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <div className={styles.step}>
      <div className={styles.left}>
        <p
          className={styles.step_id}
          style={{ color: step.color, borderColor: step.color }}
        >{`${t('step_word')} ${step.id}`}</p>
        <div className={styles.line} />
      </div>
      <div className={styles.right}>
        <p className={styles.step_title}>{t(step.title)}</p>
        <div className={styles.line} />
        <p className={styles.step_duration}>{t(step.duration)}</p>
      </div>
    </div>
  );
};

export { Step };
