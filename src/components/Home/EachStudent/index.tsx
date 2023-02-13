'use client';
import React, { FC } from 'react';
import Image from 'next/image';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type EachStudentProps = {
  lng: string;
};

const EachStudent: FC<EachStudentProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'home');

  return (
    <section className={styles.each_student}>
      <div className={styles.left_content}>
        <h2 className={styles.title}>👩‍🎓 {t('each_student_title')}</h2>
        <div className={`${styles.block} ${styles.first_block}`}>
          <div className={styles.block_heading}>
            01
            <div></div>
            <div></div>
          </div>
          <p>{t('each_student_step_1')}</p>
        </div>
        <div className={styles.block}>
          <div className={styles.block_heading}>
            02
            <div></div>
          </div>
          <p>{t('each_student_step_2')}</p>
        </div>
        <div className={styles.block}>
          <div className={styles.block_heading}>
            03
            <div></div>
          </div>
          <p>{t('each_student_step_3')}</p>
        </div>
      </div>
      <div className={styles.right_content_wrap}>
        <div className={styles.right_content}>
          <Image
            src="/each_student.png"
            alt="uversity students in circles"
            width={569}
            height={621}
            className={styles.content_img}
          />
          <p className={styles.description}>{t('each_student_description')}</p>
        </div>
        <div className={styles.right_bottom}>
          <div />
          <div />
        </div>
      </div>
    </section>
  );
};

export { EachStudent };
