import '@/app/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from 'react';
import Navbar from '@/app/Navbar';

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop cars for sale',
}

export default function RootLayout(
    {
      children,
    }: {
      children: React.ReactNode
    }) {
  return (
      <section>
        <div className={inter.className}>
          <Navbar/>
          {children}
        </div>
      </section>
  )
}

