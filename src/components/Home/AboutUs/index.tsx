import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';

const AboutUs: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grey_block}></div>
      <div className={styles.content}>
        <div className={styles.picture}>
          <Image
            src="/about_us_1stBlock.png"
            alt="About Us"
            width={420}
            height={575}
          />
          <div className={styles.info_block}>
            Ми молода амбітна компанія, яка допомагає вирушити у пригоду на
            навчання в омріяну країну світу.
          </div>
        </div>
        <div className={styles.text}></div>
      </div>
      <div className={styles.white_block}></div>
    </div>
  );
};

export { AboutUs };
