'use client';
import React, { FC } from 'react';

// Components
import { Step } from './Step';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type HowWeWorkProps = {
  lng: string;
};

const steps: Step[] = [
  {
    id: '1',
    title: 'step_1_title',
    duration: 'step_1_duration',
    color: '#954D68'
  },
  {
    id: '2',
    title: 'step_2_title',
    duration: 'step_2_duration',
    color: '#A85859'
  },
  {
    id: '3',
    title: 'step_3_title',
    duration: 'step_3_duration',
    color: '#BF6646'
  },
  {
    id: '4',
    title: 'step_4_title',
    duration: 'step_4_duration',
    color: '#D77433'
  },
  {
    id: '5',
    title: 'step_5_title',
    duration: 'step_5_duration',
    color: '#EB8023'
  }
];

const HowWeWork: FC<HowWeWorkProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <section className={styles.how_we_work}>
      <div className={styles.bg}>
        <div />
        <div />
      </div>
      <div className={styles.content}>
        <h1>{t('how_we_work_title')}</h1>
        <div className={styles.steps}>
          {steps.map(step => (
            <Step step={step} lng={lng} key={step.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { HowWeWork };
