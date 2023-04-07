import React, { Suspense } from 'react';

// Components
import { PageHeading } from '@components';
import {
  WeLoveOurWork,
  OurAdvantages,
  LetsMeetEachOther,
  ProfessionalGrowth,
  OurMeetings,
  Certificates
} from '@components/AboutUs';

type HomeProps = {
  params: Params;
};

const AboutUs = async ({ params: { lng } }: HomeProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageHeading lng={lng} dictionary="about_us" />
      <WeLoveOurWork lng={lng} />
      <OurAdvantages lng={lng} />
      <LetsMeetEachOther lng={lng} />
      <ProfessionalGrowth lng={lng} />
      <OurMeetings lng={lng} />
      <Certificates lng={lng} />
    </Suspense>
  );
};

export default AboutUs;
