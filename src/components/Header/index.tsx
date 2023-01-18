import React, { FC } from 'react';
import Image from 'next/image';

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
        <div className={styles.logo_container}>
          <Image src="/logo_white.png" alt="logo" width={105} height={105} />
        </div>
        <div className={styles.nav_container}>
          <div className={styles.nav_lang}>
            <span>
              <p>Укр</p>
              <Image
                src="/down_arrow.svg"
                alt="down_arrow"
                width={9.9}
                height={5.66}
              />
            </span>
          </div>
          <nav>
            <ul>
              <li>{t('menu_item_1')}</li>
              <li>{t('menu_item_2')}</li>
              <li>{t('menu_item_3')}</li>
              <li>{t('menu_item_4')}</li>
              <li>{t('menu_item_5')}</li>
            </ul>
          </nav>
          <div className={styles.nav_contact}>
            <span>
              <p>{t('number_kyivstar')}</p>
              <Image
                src="/down_arrow.svg"
                alt="down_arrow"
                width={9.9}
                height={5.66}
              />
            </span>
          </div>
        </div>
      </div>
      <Button className={styles.button}>{t('header_button')}</Button>
    </header>
  );
};

export { Header };
