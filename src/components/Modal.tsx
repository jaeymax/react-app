import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { ReactNode } from 'react'
import ModalHeader from './ModalHeader';


interface ModalProps{
    name:string;
    closeModal:()=>void;
    children:ReactNode;
}

const Modal:React.FC<ModalProps> = ({name, children, closeModal}) => {
  return (
    <div className='flex flex-col bg-white rounded-md absolute top-0 left-0 right-0 bottom-0 z-10' >
    <ModalHeader name={name} closeModal={closeModal} />
       {children}
    </div>
  )
}

export default Modal
