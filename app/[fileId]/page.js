"use client"
import React, { useEffect, useState } from 'react'
import { getDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import FileItem from '../[fileId]/_components/FileItem'
import Link from 'next/link';
import Image from 'next/image';

function FileView({params}) {
    const db = getFirestore(app);
    const [file, setFile] = useState(null);
    useEffect(() => {
        //console.log(params.fileId);
        params.fileId&&getFileInfo()
    },[])
    
    const getFileInfo = async () => {
        const docRef = doc(db, "uploadedFile", params?.fileId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setFile(docSnap.data());  // Store the actual file data
        } else {
          console.log("No such document!");
        }
      }
  return (
    <div className='bg-gray-800 h-screen w-full flex justify-center items-center flex-col gap-4'>
      <FileItem file={file}/>
    </div>
  )
}

export default FileView
