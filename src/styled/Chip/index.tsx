import React, { FC } from 'react';

import styles from './index.module.scss';

type ChipProps = {
  className?: string;
  children: string;
  onClick?: (id: string) => void;
  active?: boolean;
  id?: string | null;
};

const Chip: FC<ChipProps> = ({ className, children, onClick, active, id }) => {
  return (
    <div
      className={`${styles.chip} ${className || ''} ${
        active ? styles.active : ''
      }`}
      onClick={() => onClick && onClick(id || '')}
    >
      {children}
    </div>
  );
};

export { Chip };
