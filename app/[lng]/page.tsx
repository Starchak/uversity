import React, { Suspense } from 'react';

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

type HomeProps = {
  params: Params;
};

const Home = async ({ params: { lng } }: HomeProps) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Slider lng={lng} />
        <AboutUs lng={lng} />
        <WeOffer lng={lng} />
        <WhyUs lng={lng} />
        <EachStudent lng={lng} />
        <HowWeWork lng={lng} /> {/*TODO: Mobile Adaptation */}
        <Reviews lng={lng} /> {/*TODO: Mobile Adaptation */}
        <ContactUs lng={lng} /> {/*TODO: Mobile Adaptation */}
      </Suspense>
    </div>
  );
};

export default Home;
