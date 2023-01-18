import React, { FC } from 'react';

import styles from './index.module.scss';

const AboutUs: FC = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.grey_block}></div>
      <div className={styles.picture}></div>
      <div className={styles.description}></div>
      <div className={styles.white_block}>
        {/* <div className={styles.title}></div>
        <div className={styles.subtitle}></div>
        <div className={styles.btn}></div> */}
      </div>
    </div>
  );
};

export { AboutUs };
