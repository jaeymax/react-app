import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to={'/'} className="shadow-sm py-5 text-center">
        <h1 className='text-3xl text-green-700 font-extrabold' >flair</h1>
    </Link>
  )
}

export default Header
