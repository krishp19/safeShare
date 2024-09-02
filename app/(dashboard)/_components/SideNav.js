"use client"

import { Shield, Upload,File } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'

function SideNav() {
    const menuList = [
        {
            id:1,
            name:'Upload',
            icon:Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className='p-5'>
        <Image src='/logo.svg' width={150} height={100}/>
      </div>
      <div className='flex flex-col float-left w-full mt-4'>
      {menuList.map((item,index) => (
        <button 
        className={`flex gap-2 p-4 px-6  hover:rounded-md ml-3 w-full ${activeIndex==index?'bg-white text-blue-700 dark:bg-black dark:text-blue-700':null}`}
        onClick={()=>setActiveIndex(index)}
        >

            <item.icon/>
            <h2>{item.name}</h2>
        </button>
      ))}
      </div>
    </div>
  )
}

export default SideNav
