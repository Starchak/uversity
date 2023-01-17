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

const Home: FC = () => {
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
