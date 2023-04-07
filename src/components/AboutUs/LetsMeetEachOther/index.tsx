'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type LetsMeetEachOtherProps = {
  lng: string;
};

const LetsMeetEachOther: FC<LetsMeetEachOtherProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'about_us');

  return (
    <section className={styles.section}>
      <p>Lets Meet Each Other</p>
    </section>
  );
};

export { LetsMeetEachOther };
