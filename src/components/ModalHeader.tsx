import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

interface ModalProps{
    name:string;
}

const ModalHeader:React.FC<ModalProps> = ({name}) => {
  return (
    <div className="p-6 flex items-center justify-between border-b" >
       <h2 className="font-bold text-xl" >{name}</h2>
       <IconButton >
          <CloseIcon className='text-black'/>
       </IconButton>
    </div>
  )
}

export default ModalHeader
