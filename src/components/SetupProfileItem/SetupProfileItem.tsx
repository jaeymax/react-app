import { Add, WorkOutline } from '@mui/icons-material';
import './SetupProfileItem.css';

interface SetupProfileProps{
    name:string,
    info:string;
}

const SetupProfileItem:React.FC<SetupProfileProps> = ({name, info}) => {
  return (
    <div className='setup-profile-item flex flex-row gap-4'> 
      <WorkOutline/>
      <div className="flex flex-row flex-1 justify-between ">
         <div className=' flex-1 flex flex-col gap-2' >
            <h3 className='font-bold' >{name}</h3>
            <p className='text-gray-500' >{info}</p>
         </div>
         <Add/>
      </div>
    </div>
  )
}

export default SetupProfileItem
