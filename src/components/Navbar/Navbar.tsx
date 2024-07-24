import { Link } from 'react-router-dom'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NavItem from '../NavItem/NavItem';
import { IconButton } from '@mui/material';


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-16 py-4' >
      <Link to={'/'} className='text-green-700 font-extrabold text-3xl' >flair</Link>
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
          <MenuOutlinedIcon/>
        </IconButton>
      </div>
    </nav>
  )
}

export default Navbar
