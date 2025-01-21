import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import { siteConfig } from '@/config'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = siteConfig

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#6F5AF6',
        },
        layout: {
          logoPlacement: 'none',
        },
      }}
    >
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
