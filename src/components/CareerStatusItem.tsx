import React from 'react'

interface CareerStatusItemProps{
    name:string;
}

const CareerStatusItem:React.FC<CareerStatusItemProps> = ({name}) => {
  return (
    <div className='border p-4 rounded-full text-center font-bold hover:bg-gray-50 cursor-pointer' >
        <h5>{name}</h5>
    </div>
  )
}

export default CareerStatusItem
