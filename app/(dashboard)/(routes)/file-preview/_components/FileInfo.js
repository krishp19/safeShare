import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FileInfo({ file }) {
  const [fileType, setFileType] = useState('');

  useEffect(() => {
    if (file?.fileType) {
      setFileType(file.fileType.split('/')[0]);
    }
  }, [file]);

  return file ? (
    <div className='text-center border flex justify-center m-4 flex-col items-center p-2 rounded-lg border-blue-200'>
      <Image 
        src={fileType === 'image' ? file.fileUrl : '/file.png'}
        width={200}
        height={200}
        className='h-[200px] rounded-md object-contain'
        alt={file.fileName}
      />
      <div>
        <h2>{file.fileName}</h2>
        <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
      </div>
    </div>
  ) : null;
}

export default FileInfo;
