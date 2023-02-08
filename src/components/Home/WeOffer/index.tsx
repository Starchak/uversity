'use client';
import React, { FC } from 'react';

// Components
import { InteractiveBlock } from '@styled/InteractiveBlock';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type WeOfferProps = {
  lng: string;
};

const programs = [
  {
    id: 1,
    img: '',
    title: 'post_1_title',
    countries: ['ca', 'fr', 'gr'],
    description: 'post_1_description',
    color: '#EF8220'
  },
  {
    id: 2,
    img: '',
    title: 'post_2_title',
    countries: ['ca', 'fr', 'gr'],
    description: 'post_2_description',
    color: '#EF8220'
  },
  {
    id: 3,
    img: '',
    title: 'post_3_title',
    countries: ['ca', 'fr', 'gr'],
    description: 'post_3_description',
    color: '#F7DC6D'
  },
  {
    id: 4,
    img: '',
    title: 'post_4_title',
    countries: ['ca', 'fr', 'gr'],
    description: 'post_4_description',
    color: '#934C6A'
  }
];

const WeOffer: FC<WeOfferProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  // return elements of programs where id is odd
  const oddPrograms = programs.filter(program => program.id % 2 !== 0);
  // return elements of programs where id is even
  const evenPrograms = programs.filter(program => program.id % 2 === 0);

  return (
    <section className={styles.we_offer}>
      <h1 className={styles.title}>{t('we_offer_title')}</h1>
      <div className={styles.content}>
        <div className={styles.content_left}>
          {oddPrograms.map(program => (
            <InteractiveBlock program={program} key={program.id} lng={lng} />
          ))}
        </div>
        <div className={styles.content_right}>
          {evenPrograms.map(program => (
            <InteractiveBlock program={program} key={program.id} lng={lng} />
          ))}
        </div>
      </div>
      {/* <Image src="/post_1.png" alt="Post 1 Image" width={580} height={360} /> */}
    </section>
  );
};

export { WeOffer };
