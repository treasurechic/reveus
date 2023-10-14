import './globals.scss'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reveus App',
  description: 'Discover. Review.  Earn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plus_Jakarta_Sans.className}>{children}</body>
    </html>
  )
}
