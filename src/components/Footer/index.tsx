import React, { FC } from 'react';

import { CircleIcon } from '@styled/CircleIcon';

import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      Footer <CircleIcon />
    </div>
  );
};

export { Footer };
