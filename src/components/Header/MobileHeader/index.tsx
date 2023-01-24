'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type MobileHeaderProps = {
  lng: string;
};

const MobileHeader: FC<MobileHeaderProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'header');

  return <header>Mobile Header</header>;
};

export { MobileHeader };
