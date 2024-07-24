import Header from '../../components/Header/Header'
import {Link} from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className="flex flex-col h-full">
      <Header/>
      <div className="flex-1 grid place-items-center p-5">
        <form className='flex flex-col gap-8' >
         <h1 className='font-bold text-2xl'>Get started.</h1>
          
          <div className="flex flex-col">
            <label htmlFor="fullname" className='text-gray-500' >Full name</label>
            <input type="text" className='p-5 border rounded-sm outline-none h-11' name="fullname" id="fullname" />
          </div>

          <div className='flex  gap-5 flex-col sm:flex-row '>

          <div className="flex flex-col ">
            <label htmlFor="date-of-birth" className='text-gray-500' >Date of birth</label>
            <input type="text" className='rounded-sm p-5 border outline-none h-11' name="fullname" id="fullname" />
          </div>


          <div className="flex flex-col">
            <label htmlFor="gender" className='text-gray-500' >Gender</label>
            <input type="text" className='rounded-sm p-5 border outline-none h-11' name="gender" id="gender" />
          </div>

          </div>



          <div className="flex flex-col">
            <label htmlFor="email" className='text-gray-500' >Email</label>
            <input type="email" className='rounded-sm p-5 border outline-none h-11' name="email" id="email" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone-number" className='text-gray-500' >Phone number</label>
            <input type="text" className='rounded-sm p-5 border outline-none h-11' name="phone-number" id="phone-number" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className='text-gray-500' >Password</label>
            <input type="password" className='rounded-sm p-5 border outline-none h-11' name="password" id="password" />
          </div>

          <div className="form-field"> 
            <input type="submit" className='text-white cursor-pointer rounded-sm bg-black h-11 font-semibold w-full hover:bg-zinc-800' value="Create account" />
          </div>

          <div>
            <p className='font-normal' >Already signed up? <Link to = '/login' className='text-green-700 font-bold' >Log in</Link></p>
          </div>
        </form>

      </div>

    </div>
  )
}

export default CreateAccount
