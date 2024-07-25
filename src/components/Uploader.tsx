import React, { ChangeEvent, useState } from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

interface UploaderProps{
    file:File|null;
    updateFile:React.Dispatch<React.SetStateAction<File | null>>
}

const Uploader:React.FC<UploaderProps> = ({file, updateFile}) => {


  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
     const file = e.target.files?.[0];
     if(file){
       updateFile(file);
       console.log(file);
       
     }
  }




  return (
    <div className="relative border border-dashed px-5 py-8 flex items-center justify-between">
    <div className="flex gap-3 text-gray-500" >
      {file?file.name:(
        <>
        <ArrowCircleDownIcon/>
        <p>Drop file here</p>
        </>
      )}
    </div  >
      <div typeof='file' className='font-bold border px-5 p-2 cursor-pointer hover:bg-gray-50' >
         Browse
      </div>

      <input onChange={handleChange} type="file" className='border absolute cursor-pointer right-0 opacity-0' name="" id="" />
     
  </div>
  )
}

export default Uploader
