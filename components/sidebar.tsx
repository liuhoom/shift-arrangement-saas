'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Sidebar() {
  return (
    <div className='bg-gray-900 w-72 flex flex-row items-center justify-center'>
      <Link href='/'>
        <div className='relative h-8 w-8'>
          <Image src='/logo.png' fill alt='logo' />
        </div>
        <h2 className='text-white text-2xl font-bold'>heheda</h2>
      </Link>
      <div className=''></div>
    </div>
  )
}
