import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Favicon from '../../public/favicon.ico';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Terre-Restaurant',
  description: 'Landing pages for restaurant',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
