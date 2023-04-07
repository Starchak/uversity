'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type OurMeetingsProps = {
  lng: string;
};

const OurMeetings: FC<OurMeetingsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'about_us');

  return (
    <section className={styles.section}>
      <p>Our Meetings</p>
    </section>
  );
};

export { OurMeetings };
