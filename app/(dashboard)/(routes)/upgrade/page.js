import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Files() {
  return (
    <div className='flex justify-around'>
      Upgrade
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Files
