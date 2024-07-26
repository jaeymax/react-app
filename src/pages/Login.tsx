import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='flex flex-col h-full' >
      <Header/>
      <div className="flex-1 grid place-items-center p-5 ">
        <form className='flex flex-col gap-8 ' >
         <h1 className='font-bold text-2xl'>Get started.</h1>
          

          <div className="flex flex-col">
            <label htmlFor="email" className='text-gray-500' >Email</label>
            <input required type="email" className='rounded-sm border p-5 outline-none h-11' name="email" id="email" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className='text-gray-500' >Password</label>
            <input required type="password" className='rounded-sm border p-5 outline-none h-11' name="password" id="password" />
          </div>

          <div className="form-field"> 
            <input type="submit" className='text-white cursor-pointer rounded-sm bg-black h-11 font-semibold w-full hover:bg-zinc-800' value="Log in" />
          </div>

          <div>
            <p className='font-normal' >Already signed up? <Link to = '/create-account' className='text-green-700 font-bold' >Sign up</Link></p>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
