"use client"
import React, { useEffect } from 'react'

function FilePreview({params}) {

    useEffect(() => {
        console.log(params?.fileId);
    },[])
  return (
    <div>
      File Preview
    </div>
  )
}

export default FilePreview
