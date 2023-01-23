import React, { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const WeOffer: FC = () => {
  return (
    <div className={styles.we_offer}>
      WeOffer
      <Image src="/post_1.png" alt="Post 1 Image" width={580} height={360} />
    </div>
  );
};

export { WeOffer };
