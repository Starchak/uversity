'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type EachStudentProps = {
  lng: string;
};

const EachStudent: FC<EachStudentProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return <div className={styles.each_student}>EachStudent</div>;
};

export { EachStudent };
