'use client';
import React, { FC } from 'react';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type PageHeadingProps = {
  lng: string;
  dictionary: string;
};

const PageHeading: FC<PageHeadingProps> = ({ lng, dictionary }) => {
  const { t } = useTranslation(lng, dictionary);

  return (
    <section className={styles.page_heading}>
      <p>Page Heading</p>
    </section>
  );
};

export { PageHeading };
