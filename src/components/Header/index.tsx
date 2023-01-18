import React, { FC } from 'react';

import styles from './index.module.scss';

type HeaderProps = {
  t: (a: string) => string;
};

const Header: FC<HeaderProps> = ({ t }) => {
  return (
    <div className={styles.header}>
      <ul>
        <li>{t('menu_item_1')}</li>
        <li>{t('menu_item_2')}</li>
        <li>{t('menu_item_3')}</li>
        <li>{t('menu_item_4')}</li>
        <li>{t('menu_item_5')}</li>
      </ul>
    </div>
  );
};

export { Header };
