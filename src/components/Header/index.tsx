'use client';
import React, { FC } from 'react';

// Components
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

// Helpers
import useWindowSize from '@helpers/useWindowDimensions';

type HeaderProps = {
  lng: string;
};

const Header: FC<HeaderProps> = ({ lng }) => {
  const { width } = useWindowSize();

  if (width) {
    return (
      <>
        {width <= 1125 ? (
          <MobileHeader lng={lng} />
        ) : (
          <DesktopHeader lng={lng} />
        )}
      </>
    );
  } else {
    return null;
  }
};

export { Header };
