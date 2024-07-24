import Header from '../../components/Header/Header'
import './CareerStatus.css'

const CareerStatus = () => {
  return (
    <div className='flex flex-col h-full'>
      <Header/>
      <div className=" p-8 flex-1">
        <div className=" flex flex-col gap-6 bg-blue-100 ">
            <h1 className='font-bold text-2xl mb-6' >Where are you currently in your professional career?</h1>
            <div className='border p-4 rounded-full text-center font-bold' >
              <h5>Still in school</h5>
            </div>
            <div className='border p-4 rounded-full text-center font-bold'>
              <h5>Currently doing National Service</h5>
            </div>
            <div className='border p-4 rounded-full text-center font-bold'>
              <h5>Done with National Service</h5>
            </div>
            <div className='border p-4 rounded-full text-center font-bold'>
              <h5>
              Experienced Professional
              </h5>
            </div>
            <button className='font-bold text-white bg-black p-4'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default CareerStatus
