import React, { FC } from 'react';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type Program = {
  id: number;
  title: string;
  description: string;
  img: string;
  countries: string[];
  color: string;
};

type InteractiveBlockProps = {
  program: Program;
  lng: string;
};

const InteractiveBlock: FC<InteractiveBlockProps> = ({ program, lng }) => {
  const { t } = useTranslation(lng, 'programs');

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <div
            className={styles.dot}
            style={{ background: program.color }}
          ></div>
          <p className={styles.program_number}>{`${t('program_word')} ${
            program.id
          }`}</p>
          <div></div>
        </div>
        <div className={styles.card_right}>
          <p className={styles.title}>{t(program.title)}</p>
          <div className={styles.countries}></div>
          <p className={styles.description}>{t(program.description)}</p>
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export { InteractiveBlock };
