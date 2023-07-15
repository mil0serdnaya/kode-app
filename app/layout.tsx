import { Metadata } from 'next'
import Head from 'next/head';
import './normalize.css';
import './global.css';
 
export const metadata: Metadata = {
  title: 'KODE app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>{children}</body>
    </html>
  )
}