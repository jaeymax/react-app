import { Link } from 'react-router-dom'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NavItem from './NavItem';
import { IconButton } from '@mui/material';


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-16 py-4' >
      <Link to={'/'} className='flex items-center' >
        <div className='text-green-700 font-extrabold text-3xl' >
          flair
        </div>
        <div className='w-10 h-10' >

        <svg className='w-[80px]'  fill='#15803d' viewBox="0 0 256 256" version="1.1" id="Layer_1"  xmlns="http://www.w3.org/2000/svg"> 
        <path  d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"/>
        </svg>
        </div>
      </Link>
      <div className='flex gap-12 hidden lg:flex '>
        <NavItem icon={<WorkOutlineIcon/>} name='Jobs' />
        <NavItem  icon = {<PersonOutlineOutlinedIcon/>} name='Mentorship'/>
        <NavItem icon = {<WorkOutlineIcon/>} name='Trainings' />
      </div>
      <div className="flex items-center gap-3">
        <div className='flex items-center gap-3 hidden md:flex'>
        <Link  className='block no-underline py-3 px-4 font-semibold border rounded-sm hover:bg-gray-50 ' to={'/login'}>Log in</Link>
        <Link className='block no-underline py-3 px-4 font-semibold text-white bg-black rounded-sm btn-black hover:bg-zinc-800' to={'/create-account'} >Sign up</Link>
        </div>
        
        <IconButton>
          <MenuOutlinedIcon fontSize='large' className='text-black cursor-pointer'/>
        </IconButton>
        
      </div>
    </nav>
  )
}

export default Navbar
