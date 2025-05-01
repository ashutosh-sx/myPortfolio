import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashutosh Saxena Portfolio',
  description: 'Information about me',
  generator: 'Ashutosh Saxena',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
