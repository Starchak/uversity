'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import ReactCountryFlag from 'react-country-flag';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

// Icons
import FullArrowSVG from '/public/full_arrow.svg';

import styles from './index.module.scss';

type InteractiveBlockProps = {
  program: Program;
  lng: string;
};

const InteractiveBlock: FC<InteractiveBlockProps> = ({ program, lng }) => {
  const [hovered, setHovered] = React.useState(false);

  const { t } = useTranslation(lng, 'programs');

  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} ${hovered ? styles.card_hovered : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.card_left}>
          <div
            className={styles.dot}
            style={{ background: program.color }}
          ></div>
          <p className={styles.program_number}>{`${t('program_word')} ${
            program.id
          }`}</p>
          <div></div>
        </div>
        <div className={styles.card_right}>
          <p className={styles.title}>{t(program.title)}</p>
          <div className={styles.countries}>
            {program.countries.map(countryCode => (
              <ReactCountryFlag
                countryCode={countryCode}
                className={styles.countryFlag}
                key={`${program.id}_${countryCode}`}
              />
            ))}
          </div>
          <p className={styles.description}>{t(program.description)}</p>
          <Link href={program.link} className={`link ${styles.details_link}`}>
            {t('detailed_word')}
            <FullArrowSVG fill="#111" className={styles.arrow_icon} />
          </Link>
        </div>
      </div>
      <div className={styles.image_container}>
        <Image
          src={`/${program.img}`}
          alt="post image"
          fill={true}
          className={styles.img}
        />
      </div>
    </div>
  );
};

export { InteractiveBlock };
