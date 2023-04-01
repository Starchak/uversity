import React, { FC } from 'react';

import styles from './index.module.scss';

type ButtonProps = {
  className?: string;
  children: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <div className={`${styles.button} ${className || ''}`} onClick={onClick}>
      {children}
    </div>
  );
};

export { Button };
