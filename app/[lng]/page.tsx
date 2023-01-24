import React from 'react';

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

import { useTranslation } from '@i18n';

type HomeProps = {
  params: Params;
};

const Home = async ({ params: { lng } }: HomeProps) => {
  const { t } = await useTranslation(lng, 'header');

  return (
    <div>
      <Slider lng={lng} />
      <AboutUs lng={lng} />
      <WeOffer lng={lng} />
      <WhyUs lng={lng} />
      <EachStudent lng={lng} />
      <HowWeWork lng={lng} />
      <Reviews lng={lng} />
      <ContactUs lng={lng} />
    </div>
  );
};

export default Home;
