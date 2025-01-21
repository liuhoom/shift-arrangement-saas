import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full relative'>
      <div className='bg-gray-900 h-full hidden md:w-72 md:flex md:flex-col md:inset-y-0 z-30'>
        <div className='justify-start hidden md:inline-flex'>
          <Link href='/' className='flex items-center flex-row'>
            <div className='h-6 w-6 relative'>
              <Image src='/logo.png' alt='logo-image' fill />

              <h2 className='text-white text-2xl font-bold'>heehda</h2>
            </div>
          </Link>
        </div>
        <div className='md:ml-72'>
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
