'use client';
import React, { FC } from 'react';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type WeOfferProps = {
  lng: string;
};

const WeOffer: FC<WeOfferProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <div className={styles.we_offer}>
      WeOffer
      <Image src="/post_1.png" alt="Post 1 Image" width={580} height={360} />
    </div>
  );
};

export { WeOffer };
