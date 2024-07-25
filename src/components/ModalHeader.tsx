
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ModalProps{
    name:string;
    closeModal:()=>void;
}

const ModalHeader:React.FC<ModalProps> = ({name, closeModal}) => {
  return (
    <div className="p-6 flex items-center justify-between border-b" >
       <h2 className="font-bold text-xl" >{name}</h2>
       <IconButton onClick={closeModal} >
          <CloseIcon className='text-black'/>
       </IconButton>
    </div>
  )
}

export default ModalHeader
