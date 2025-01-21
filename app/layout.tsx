import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import { siteConfig } from '@/config'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Navbar } from '@/components/navbar'

import './globals.css'

const inter = Montserrat({ subsets: ['latin'], weight: '600' })
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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
