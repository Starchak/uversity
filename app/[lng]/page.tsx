import React, { FC } from 'react';

import {
  AboutUs,
  ContactUs,
  EachStudent,
  HowWeWork,
  Reviews,
  Slider,
  WeOffer,
  WhyUs
} from '@components/Home';

import { useTranslation } from '../i18n';

type HomeProps = {
  params: Params;
};

const Home = async ({ params: { lng } }: HomeProps) => {
  const { t } = await useTranslation(lng, 'header');

  return (
    <div>
      <Slider />
      <AboutUs />
      <WeOffer />
      <WhyUs />
      <EachStudent />
      <HowWeWork />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
