import React, { ReactNode } from 'react';
import { dir } from 'i18next';

import { languages } from '@i18n/settings';

// Components
import { Header, Footer } from '@components';

// Reset CSS
import '@styles/reset.css';
import '@styles/global.scss';

// Types
type RootLayoutProps = {
  children: ReactNode;
  params: Params;
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

const RootLayout = async ({ children, params: { lng } }: RootLayoutProps) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>Uversity</title>
      </head>
      <body>
        <Header lng={lng} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
