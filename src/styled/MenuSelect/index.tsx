import React, { FC, ReactNode } from 'react';

import styles from './index.module.scss';

type MenuSelect = {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
};

const MenuSelect: FC<MenuSelect> = ({ className, children, isOpen }) => {
  return (
    <div
      className={`${className} ${styles.menu_select} ${
        isOpen ? styles.open : styles.close
      }`}
    >
      {children}
    </div>
  );
};

export { MenuSelect };
