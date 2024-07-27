import { useState } from "react"


const FormatIcon:React.FC<FormatIconProps> = ({index,selectedIcon, children, updateSelectedIcon}) => {

  const [selected, setSelected] = useState(false);

  const handleClick = () =>{
    if(index === selectedIcon){
        updateSelectedIcon(null);
        setSelected(false);
    }
    else{
        updateSelectedIcon(index);
        setSelected(true);
    }
  }

  return (
    <div onClick={handleClick} className={`${selected?'bg-gray-100':''} cursor-pointer rounded-sm p-1`}>
       {children}
    </div>
  )
}

export default FormatIcon
