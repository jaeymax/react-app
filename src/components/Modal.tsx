import React, { ReactNode } from 'react'
import ModalHeader from './ModalHeader';


interface ModalProps{
    name:string;
    closeModal:()=>void;
    children:ReactNode;
}

const Modal:React.FC<ModalProps> = ({name, children, closeModal}) => {
  return (
    <div className='flex flex-col bg-white rounded-md shadow-2xl shadow-gray-800 absolute top-5 left-5 right-5 bottom-5 z-10' >
    <ModalHeader name={name} closeModal={closeModal} />
       {children}
    </div>
  )
}

export default Modal
