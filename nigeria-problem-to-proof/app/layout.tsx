import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nigeria Problem to Proof',
  description: 'From real Nigerian problems to solutions that prove themselves.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
