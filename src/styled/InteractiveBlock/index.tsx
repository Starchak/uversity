import React, { FC } from 'react';
import Image from 'next/image';

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
};

const InteractiveBlock: FC<InteractiveBlockProps> = ({ program }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <div
            className={styles.dot}
            style={{ background: program.color }}
          ></div>
          <p className={styles.program_number}>{`Програма ${program.id}`}</p>
          <div></div>
        </div>
        <div className={styles.card_right}>
          <p></p>
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export { InteractiveBlock };
