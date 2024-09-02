import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Files() {
  return (
    <div className='flex justify-around'>
      Files
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Files
