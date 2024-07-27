import { FormEvent, useState } from 'react';
import Header from '../components/Header'
import {Link, useNavigate} from 'react-router-dom';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const CreateAccount = () => {

  const [fullname, setFullname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault();

    navigate('/verify-account');
  }

  return (
    <div className="flex flex-col h-full">
      <Header hasBackArrow = {true} />
      <div className="flex-1 grid place-items-center p-5">
        <form className='flex flex-col gap-8 max-w-[600px] mx-auto w-full' onSubmit={handleSubmit} >
         <h1 className='font-bold text-2xl'>Get started.</h1>
          
          <div className="flex flex-col">
            <label htmlFor="fullname" className='text-gray-500' >Full name</label>
            <input required value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" className='p-5 border rounded-sm outline-none h-11' name="fullname" id="fullname" />
          </div>

          <div className='flex  gap-5 flex-col sm:flex-row '>

          <div className="flex flex-col ">
            <label htmlFor="date-of-birth" className='text-gray-500' >Date of birth</label>
            <input required value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} type="text" className='rounded-sm p-5 border outline-none h-11' name="date-of-birth" id="date-of-birth" />
          </div>


          <div className="flex flex-col flex-1">
            <label htmlFor="gender" className='text-gray-500' >Gender</label>
            <div className='border px-5'>
            <select value={gender} onChange={(e)=>setGender(e.target.value)} className={`${gender === ''?'text-gray-400':''}  rounded-sm  w-full outline-none h-11 bg-white`} name="gender" id="gender">
              <option className='' value="" hidden disabled>Select One</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            </div>
            {/* <input required type="text" className='rounded-sm p-5 border outline-none h-11' name="gender" id="gender" /> */}
          </div>

          </div>



          <div className="flex flex-col">
            <label htmlFor="email" className='text-gray-500' >Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" className='rounded-sm p-5 border outline-none h-11' name="email" id="email" />
          </div>
          {/* https://flagcdn.com
/
16x12
/
ua
.
png */}
          <div className="flex flex-col">
            <label htmlFor="phone-number" className='text-gray-500' >Phone number</label>
            <div className='flex items-center rounded-sm border p-5 h-14' >
            <div className='w-[28px] h-[21px]'>
               <img 
               src="https://flagcdn.com/28x21/gh.png" className='w-full h-full object-contain' 
               alt="" />
            </div>
            <ExpandMoreOutlinedIcon className='cursor-pointer' />
            <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required type="text" className='flex-1 rounded-sm p-5 outline-none h-11' name="phone-number" id="phone-number" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className='text-gray-500' >Password</label>
            <div className='border flex rounded-sm' >
              <input value={password} onChange={(e)=>setPassword(e.target.value)} required type={showPassword?"text":"password"} className='flex-1 rounded-sm p-5  outline-none h-11' name="password" id="password" />
              <IconButton onClick={()=>setShowPassword(!showPassword)} >
                {
                  showPassword? <VisibilityOffOutlinedIcon className='text-black' /> : <VisibilityOutlinedIcon className='text-black' />
                }

              </IconButton>
              
            </div>
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
