import React, { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const Slider: FC = () => {
  return (
    <section className={styles.slider}>
      <Image
        src="/bg_home_slider.png"
        alt="Slider Graphic"
        fill={true}
        className={styles.image_container}
      />
      <div className={styles.slider_content}></div>
    </section>
  );
};

export { Slider };
