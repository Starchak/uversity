import React, { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Uversity</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
