'use client';
import React, { FC, useState } from 'react';
import loadable from '@loadable/component';
// @ts-ignore
const Carousel = loadable(() => import('react-spring-3d-carousel'));
import { uuid } from 'uuidv4';
// @ts-ignore
import { config } from 'react-spring';

// Components
import { Card } from './Card';

// SVG
import ArrowSVG from '/public/arrow.svg';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

const slides = [
  {
    key: uuid(),
    content: <img src="https://picsum.photos/800/800/?random" alt="1" />
  },
  {
    key: uuid(),
    content: <img src="https://picsum.photos/800/800/?random" alt="2" />
  },
  {
    key: uuid(),
    content: <img src="https://picsum.photos/600/800/?random" alt="3" />
  },
  {
    key: uuid(),
    content: <img src="https://picsum.photos/800/500/?random" alt="4" />
  },
  {
    key: uuid(),
    content: <img src="https://picsum.photos/800/800/?random" alt="5" />
  },
  {
    key: uuid(),
    content: <img src="https://picsum.photos/500/800/?random" alt="6" />
  },
  {
    key: uuid(),
    content: <img src="https://picsum.photos/800/600/?random" alt="7" />
  },
  {
    key: uuid(),
    content: <img src="https://picsum.photos/800/800/?random" alt="8" />
  }
];

const reviewsData: Review[] = [
  {
    id: uuid(),
    name: 'review_1_name',
    university: 'review_1_university',
    text: 'review_1_text',
    img: '/review_1.png'
  },
  {
    id: uuid(),
    name: 'review_2_name',
    university: 'review_2_university',
    text: 'review_2_text',
    img: '/review_1.png'
  },
  {
    id: uuid(),
    name: 'review_3_name',
    university: 'review_3_university',
    text: 'review_3_text',
    img: '/review_1.png'
  }
];

type ReviewsProps = {
  lng: string;
};

const Reviews: FC<ReviewsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  const [goToSlide, setGoToSlide] = useState(0);

  return (
    <section className={styles.reviews}>
      <h1>{t('reviews_title')}</h1>
      <Carousel
        // @ts-ignore
        slides={reviewsData.map(review => {
          return {
            key: review.id,
            content: <Card review={review} lng={lng} />
          };
        })}
        goToSlide={goToSlide}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={config.slow}
      />
      <div className={styles.slider_nav}>
        <div
          className={styles.svg_container}
          onClick={() => {
            setGoToSlide(goToSlide - 1);
          }}
        >
          <ArrowSVG fill="#666" className={styles.left_arrow} />
        </div>
        <div className={styles.arrow_divider} />
        <div
          className={styles.svg_container}
          onClick={() => {
            setGoToSlide(goToSlide + 1);
          }}
        >
          <ArrowSVG fill="#666" className={styles.right_right} />
        </div>
      </div>
    </section>
  );
};

export { Reviews };
