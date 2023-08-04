import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const inter = localFont({src: '../public/fonts/nfs.ttf'})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* PUT THE NAVBAR COMPONENT HERE*/}
        {children}
        {/* PUT THE FOOTER COMPONENT HERE*/}
      </body>
    </html>
  )
}
