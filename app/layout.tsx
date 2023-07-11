import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kode',
  description: 'App to check out list of your employees/collegues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}