import { Link } from 'react-router-dom'
import './Navbar.css'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NavItem from '../NavItem/NavItem';
import { IconButton } from '@mui/material';


const Navbar = () => {
  return (
    <nav className='navbar' >
      <h1>flair</h1>
      <div className='nav-item-container'>
        <NavItem icon={<WorkOutlineIcon/>} name='Jobs' />
        <NavItem  icon = {<PersonOutlineOutlinedIcon/>} name='Mentorship'/>
        <NavItem icon = {<WorkOutlineIcon/>} name='Trainings' />
      </div>
      <div className="buttons">
        <Link to={'/login'}>Log in</Link>
        <Link to={'/create-account'} >Sign up</Link>
        
        <IconButton>
          <MenuOutlinedIcon/>
        </IconButton>
      </div>
    </nav>
  )
}

export default Navbar
