import React, { FC } from 'react';

import styles from './index.module.scss';

const AboutUs: FC = () => {
  return (
    <section className={styles.about_us}>
      <div className={styles.bg}>
        <div className={styles.bg_left}></div>
        <div className={styles.bg_right}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_left}></div>
        <div className={styles.content_right}></div>
      </div>
    </section>
  );
};

export { AboutUs };
