import { Add, WorkOutline } from '@mui/icons-material';
import { ReactNode } from 'react';
import { IconButton } from '@mui/material';

interface SetupProfileProps{
    icon:ReactNode,
    name:string,
    info:string,
    openModal:()=>void;
}

const SetupProfileItem:React.FC<SetupProfileProps> = ({icon, name, info, openModal}) => {

  const handleClick = () =>{
       openModal();
  }

  return (
    <div className='setup-profile-item flex flex-row gap-4 min-w-0'> 
      {icon}
      <div className="flex flex-row flex-1 justify-between items-center border-b-2 p-2 ">
         <div className='flex-1 flex flex-col gap-2'  >
            <h3 className='font-bold' >{name}</h3>
            <p className='text-gray-500' >{info}</p>
         </div>
         <IconButton onClick={handleClick} >
         <Add className='' />
         </IconButton>
      </div>
    </div>
  )
}

export default SetupProfileItem
