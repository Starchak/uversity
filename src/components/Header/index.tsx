'use client';
import React, { FC } from 'react';

// Components
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

// Helpers
import useWindowDimensions from '@helpers/useWindowDimensions';

import styles from './index.module.scss';

type HeaderProps = {
  lng: string;
};

const Header: FC<HeaderProps> = ({ lng }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width <= 1125 ? <MobileHeader lng={lng} /> : <DesktopHeader lng={lng} />}
    </>
  );
};

export { Header };
