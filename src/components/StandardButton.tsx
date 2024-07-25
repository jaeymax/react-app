import React, { MouseEventHandler } from 'react'

interface StandardButtonProps{
    disabled:boolean;
    onClick:MouseEventHandler;
    name:string;
    styles:string;
}

const StandardButton:React.FC<StandardButtonProps> = ({disabled, onClick, name, styles}) => {
  return (
 
          <button 
          disabled = {disabled} 
          onClick={onClick} 
          className={`${styles} ${disabled?'bg-gray-300':''}`} 
          >
            {name}
         </button>
   
  )
}

export default StandardButton;
