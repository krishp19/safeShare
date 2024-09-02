import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-5  items-center justify-between md:justify-end shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
      <AlignJustify className='md:hidden'/>
      <Image src='/logo.svg' width={150} height={100} className='md:hidden'/>
      <UserButton/>
    </div>
  )
}

export default TopHeader

