import React, { MouseEventHandler } from 'react'

interface StandardButtonProps{
    disabled:boolean;
    onClick:MouseEventHandler;
    name:string;
    styles:string;
}

const StandardButton:React.FC<StandardButtonProps> = ({disabled, onClick, name, styles}) => {
  return (
    <div>
          <button 
          disabled = {disabled} 
          onClick={onClick} 
          className={`${styles} ${disabled?'bg-gray-300':''}`} 
          >
            {name}
         </button>
    </div>
  )
}

export default StandardButton;
