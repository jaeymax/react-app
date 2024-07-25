import Header from '../components/Header'
import CareerStatusItem from '../components/CareerStatusItem'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { careerStatuses } from '../data/careerStatuses';

const CareerStatus = () => {

  //setuprofile
  let navigate = useNavigate();

  const [selectedStatus, setSelectedStatus] = useState<number|null>(null);


  const handleClick = () =>{
      navigate('/setup-profile');
  }

  

  return (
    <div className='flex flex-col h-full'>
      <Header/>
      <div className=" p-8 flex-1 flex">
        <div className="relative flex flex-col gap-6 max-w-[600px] w-full mx-auto">
            <h1 className='font-bold text-2xl mb-6' >Where are you currently in your professional career?</h1>
            {
              careerStatuses.map((careerStatus, index)=>(
                <CareerStatusItem
                  key={index}
                  index = {index}
                  name={careerStatus}
                  isSelected = {index === selectedStatus}
                  updateSelectedStatus = {setSelectedStatus}
                />
              ))
            }
            <button onClick={handleClick} className='font-bold text-white bg-black p-4 max-sm:absolute max-sm:left-0 max-sm:right-0 max-sm:bottom-5'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default CareerStatus