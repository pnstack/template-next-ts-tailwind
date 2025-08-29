import type { Metadata } from 'next';

import Providers from './providers';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'A Next.js template with TypeScript, Tailwind CSS, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}