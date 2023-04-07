'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type CertificatesProps = {
  lng: string;
};

const Certificates: FC<CertificatesProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'about_us');

  return (
    <section className={styles.section}>
      <p>Certificates</p>
    </section>
  );
};

export { Certificates };
