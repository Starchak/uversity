'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';

// Styled
import { Button, Chip, TextInput } from '@styled';

// Translation
import { useTranslation } from '@i18n/client';

import styles from './index.module.scss';

type ContactUsProps = {
  lng: string;
};

const ContactUs: FC<ContactUsProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'contact_us');

  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [phoneOrEmail, setPhoneOrEmail] = useState<string>('');

  const chipClick = (id: string) => {
    if (selectedChips.includes(id)) {
      setSelectedChips(selectedChips.filter(chip => chip !== id));
    } else {
      setSelectedChips([...selectedChips, id]);
    }
  };

  const sendForm = () => {
    console.log('send');
  };

  return (
    <div className={styles.contact_us}>
      <div className={styles.img_container}>
        <Image src="/countries_circle.png" alt="countries_circle" fill />
      </div>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.sub_title}>{t('sub_title')}</p>
      <p className={styles.sub_title}>{t('im_interested')}</p>
      <div className={styles.chip_container}>
        <Chip
          id={t('chip_1')}
          onClick={chipClick}
          active={selectedChips.includes(t('chip_1'))}
        >
          {t('chip_1')}
        </Chip>
        <Chip
          id={t('chip_2')}
          onClick={chipClick}
          active={selectedChips.includes(t('chip_2'))}
        >
          {t('chip_2')}
        </Chip>
        <Chip
          id={t('chip_3')}
          onClick={chipClick}
          active={selectedChips.includes(t('chip_3'))}
        >
          {t('chip_3')}
        </Chip>
        <Chip
          id={t('chip_4')}
          onClick={chipClick}
          active={selectedChips.includes(t('chip_4'))}
        >
          {t('chip_4')}
        </Chip>
        <Chip
          id={t('chip_5')}
          onClick={chipClick}
          active={selectedChips.includes(t('chip_5'))}
        >
          {t('chip_5')}
        </Chip>
      </div>
      <div className={styles.contact_form}>
        <TextInput
          value={name}
          onChange={setName}
          placeholder={t('name_input')}
        />
        <TextInput
          value={phoneOrEmail}
          onChange={setPhoneOrEmail}
          placeholder={t('phone_or_email')}
        />
        <p className={styles.consent_text}>{t('consent')}</p>
        <Button onClick={sendForm}>{t('send_btn')}</Button>
      </div>
    </div>
  );
};

export { ContactUs };
