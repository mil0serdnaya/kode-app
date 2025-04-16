import '../styles/normalize.css';
import type { Metadata } from 'next';
import { StyledComponentsRegistry } from '../lib/styled-components-registry';
import { Providers } from '../lib/providers';

export const metadata: Metadata = {
  title: 'KODE App',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
      />
    </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
