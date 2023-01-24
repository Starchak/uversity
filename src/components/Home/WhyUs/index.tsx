import React, { FC } from 'react';

import styles from './index.module.scss';

const WhyUs: FC = () => {
  return (
    <div className={styles.why_us}>
      <div className={styles.title}>
        <h2>Чому обирають Uversity?</h2>
      </div>
      <div className={styles.subtitle}>
        <div> Ми допоможемо вступити у виші будь-якої країни світу, </div>
        <div> Подамо на можливі стипендії та знижки,</div>
        <div> Підберемо гранти та стипендії,</div>
        <div> Знайдемо програми для студентів у віці 30+,</div>
        <div> А 100% наших студентів отримують умовне зарахування!</div>
      </div>
    </div>
  );
};

export { WhyUs };
