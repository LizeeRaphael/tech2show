import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nigeria Problem to Proof',
  description: 'From real Nigerian problems to solutions that prove themselves.',
}

export const viewport: Viewport = {
  themeColor: '#070707',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/InterDisplay-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
