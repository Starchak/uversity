import React, { FC } from 'react';

// Components
import { Button } from '@styled';

import styles from './index.module.scss';

type HeaderProps = {
  t: (a: string) => string;
};

const Header: FC<HeaderProps> = ({ t }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <nav>
          <ul>
            <li>{t('menu_item_1')}</li>
            <li>{t('menu_item_2')}</li>
            <li>{t('menu_item_3')}</li>
            <li>{t('menu_item_4')}</li>
            <li>{t('menu_item_5')}</li>
          </ul>
        </nav>
      </div>
      <Button />
    </header>
  );
};

export { Header };
