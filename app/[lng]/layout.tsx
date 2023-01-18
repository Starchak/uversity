import React, { ReactNode } from 'react';
import { dir } from 'i18next';

import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n';

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
  const { t } = await useTranslation(lng, 'header');

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>Uversity</title>
      </head>
      <body>
        <Header t={t} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
