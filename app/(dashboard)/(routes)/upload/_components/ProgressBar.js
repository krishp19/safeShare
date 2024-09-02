import React from 'react'

function ProgressBar({progress=40}) {
  return (
    <div className='bg-gray-400 dark:bg-gray-800 w-full h-5 mt-3 rounded-full'>
        <div className='p-1 bg-blue-800 h-5 rounded-full text-[10px] text-white'
        style={{width:`${progress}%`}}>
            {`${Number(progress).toFixed(0)}%`}
        </div>
    </div>
  )
}

export default ProgressBar
