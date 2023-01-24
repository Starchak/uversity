'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type ContactUsProps = {
  lng: string;
};

const ContactUs: FC<ContactUsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return <div className={styles.contact_us}>ContactUs</div>;
};

export { ContactUs };
