"use client"
import React, { useState } from 'react'
import AlertMsg from '../_components/AlertMsg'
import FilePreview from '../_components/FilePreview'
import ProgressBar from '../_components/ProgressBar'

function UploadForm({uploadBtnClick, progress}) {

    const [file, setFile] = useState();
    const [error, setError] = useState();
    const onFileSelect = (file) => {
        console.log(file)
        if(file && file.size > 1010120000){
            console.log("Size is greater than 1GB")
            setError('Maximum File Upload Size is 1GB')
            return;
        }
        setError(null)
        setFile(file)
    }

  return (
    <div className='text-center'>
      
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-600 border-dashed rounded-lg cursor-pointer bg-blue-100 dark:hover:bg-gray-800 dark:bg-gray-600 hover:bg-gray-100 dark:border-blue-600 dark:hover:border-gray-500">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-12 h-12 mb-4 text-blue-500 dark:text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or <span className='text-blue-700'>drag </span>and <span className='text-blue-700'>drop</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, MP4 or GIF (MAX size: 1GB)</p>
        </div>
        <input 
            id="dropzone-file" 
            type="file" 
            class="hidden" 
            onChange={(event) => onFileSelect(event.target.files[0])}
        />
    </label>
</div> 
{file? <FilePreview file={file} removeFile={() => setFile(null)}/>:null}
{error? <AlertMsg msg={error}/>:null}
    {progress>0?<ProgressBar progress={progress}/>:<button 
    disabled={!file} 
    className='p-2 bg-blue-700 text-white w-[30%] rounded-full mt-5 disabled:bg-gray-600'
    onClick={() => uploadBtnClick(file)}
    >Upload</button>}
    </div>
  )
}

export default UploadForm
