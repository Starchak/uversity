import React, { FC } from 'react';

import styles from './index.module.scss';

type ButtonProps = {
  className?: string;
  children: string;
};

const Button: FC<ButtonProps> = ({ className, children }) => {
  return <div className={[className, styles.button].join(' ')}>{children}</div>;
};

export { Button };
