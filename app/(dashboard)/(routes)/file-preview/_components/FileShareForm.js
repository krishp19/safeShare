import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import GlobalApi from '../../../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs';

function FileShareForm({ file, onPasswordSave, onEmailSend }) {
  const [isPasswordEnable, setIsEnablePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {user} = useUser();

  const handleCopy = () => {
    navigator.clipboard.writeText(file.shortUrl);
    alert("URL copied to clipboard!");
  };

  const sendEmail = () => {
    const data = {
      emailToSend:email,
      userName:user?.fullName,
      fileName:file.fileName,
      fileSize:file.fileSize,
      fileType:file.fileType,
      shortUrl:file.shortUrl
    }
    GlobalApi.SendEmail(data).then(resp=>{
      console.log(resp);
    })
  }

  return file && (
    <div className='flex flex-col gap-4'>
      {/* Share Link */}
      <div>
        <label className='text-[14px] text-gray-500'>Share Link</label>
        <div className='flex gap-5 p-2 border rounded-md'>
          <input
            type='text'
            value={file.shortUrl}
            disabled
            className='disabled:text-gray-500 bg-transparent outline-none w-full'
          />
          <Copy
            className='text-lg text-blue-500 hover:text-blue-700 cursor-pointer'
            onClick={handleCopy}
          />
        </div>
      </div>

      {/* Enable Password Checkbox */}
      <div className='gap-3 flex'>
        <input
          type='checkbox'
          onChange={(e) => setIsEnablePassword(e.target.checked)}  // Toggle password field
        />
        <label className='text-[14px] text-gray-500'>Enable Password</label>
      </div>

      {/* Password Input (Conditional) */}
      {isPasswordEnable && (
        <div className='flex flex-col gap-2'>
          <div className='border rounded-md w-full p-2'>
            <input
              type='password'
              className='disabled:text-gray-900 bg-transparent outline-none w-full'
              value={password}
              onChange={(e) => setPassword(e.target.value)}  // Set password state
              placeholder='Enter password'
            />
          </div>
          <button
            className='p-2 bg-blue-500 text-white rounded-md disabled:bg-gray-900 hover:bg-blue-700'
            disabled={password.length < 3}  // Disable if password is too short
            onClick={() => onPasswordSave(password)}  // Save password on click
          >
            Save Password
          </button>
        </div>
      )}

      {/* Email Input (Always Enabled) */}
      <div className='mt-5 border rounded-md p-4'>
        <label className='text-[14px] text-gray-500'>Enter Email to Share</label>
        <div className='border rounded-md w-full p-2 mt-2'>
          <input
            type='email'
            className='disabled:text-gray-500 bg-transparent outline-none w-full'
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Set email state
            placeholder='example@gmail.com'
          />
        </div>
        <button
          className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 mt-2'
          disabled={email.length === 0}  // Disable if no email is entered
          onClick={() => sendEmail()}  // Send email on click
        >
          Send Email
        </button>
      </div>
    </div>
  );
}

export default FileShareForm;
