import React, { FC, ReactNode } from 'react';

import { Header, Footer } from '@components';

// Reset CSS
import '@styles/reset.css';

// Types
type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Uversity</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
