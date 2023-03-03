import React, { FC } from 'react';

import { CircleIcon } from '@styled/CircleIcon';

import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.social_media_1}>
          <div className={styles.upper_text}>Ми завжди поруч</div>
          <div className={styles.social_media_icons}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className={styles.social_between_box}>
          <div className={styles.logo}></div>
          <div className={styles.title}>Працюємо з усіма містами України</div>
          <div className={styles.contact_phones}>
            <div>+38 097 551 33 88</div>
            <div>+38 097 551 33 88</div>
          </div>
          <div className={styles.contact_email}>hello@uversity.com.ua</div>
        </div>
        <div className={styles.social_media_2}>
          <div className={styles.upper_text}>Слідкуйте за нами</div>
          <div className={styles.social_media_icons}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className={styles.bottom_menu}>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <a href="default.asp">Наші послуги</a>
              </li>
              <li>
                <a href="news.asp">Про нас</a>
              </li>
              <li>
                <a href="contact.asp">Освіта за кордоном</a>
              </li>
              <li>
                <a href="about.asp">Центр карєри</a>
              </li>
              <li>
                <a href="about.asp">Work and travel</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.privacy_policy_1}>
          © 2021 Uversity. Всі права захищені.
        </div>
        <div className={styles.privacy_policy_2}>Політика конфіденційності</div>
      </div>
    </footer>
  );
};

export { Footer };
