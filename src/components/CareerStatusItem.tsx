import React from 'react'



const CareerStatusItem:React.FC<CareerStatusItemProps> = ({name, index, isSelected, updateSelectedStatus}) => {

  const handleClick = () =>{
    updateSelectedStatus(index);
  }

  return (
    <div onClick={handleClick} className={` ${isSelected?'bg-gray-100 border-black border':'bg-white'} border p-4 rounded-full text-center font-bold hover:bg-gray-50 cursor-pointer`} >
        <h5>{name}</h5>
    </div>
  )
}

export default CareerStatusItem
