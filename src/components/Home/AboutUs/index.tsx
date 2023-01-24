'use client';
import React, { FC } from 'react';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type AboutUsProps = {
  lng: string;
};

const AboutUs: FC<AboutUsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <div className={styles.container}>
      <div className={styles.grey_block}></div>
      <div className={styles.content}>
        <div className={styles.picture}>
          <Image
            src="/about_us_1stBlock.png"
            alt="About Us"
            width={420}
            height={575}
          />

          <div className={styles.info_block}>
            Ми молода амбітна компанія, яка допомагає вирушити у пригоду на
            навчання в омріяну країну світу.
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.title}>
            <h1> Ми завжди поруч зі своїми студентами</h1>
          </div>
          <div className={styles.description}>
            Ми самі пройшли цей шлях – від подачі заявки на програму до приїзду
            в країну. Ми знаємо, з якими труднощами стикаються студенти не
            тільки на початку шляху, але вже будучи далеко за межами своєї
            країни. Будьте впевнені, що з нами ця подорож буде для вас більш
            легкою та менш стресовою.
          </div>
          <div className={styles.btn}></div>
        </div>
      </div>
      <div className={styles.white_block}></div>
    </div>
  );
};

export { AboutUs };
