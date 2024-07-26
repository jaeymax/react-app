import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface HeaderProps{
    hasBackArrow?:boolean;
}

const Header:React.FC<HeaderProps> = ({hasBackArrow}) => {
  return (
    <header className="shadow-sm  h-24 flex items-center px-7 relative">
      {hasBackArrow && (
       <div className='flex gap-3'>
          <ArrowBack className='cursor-pointer' />
         <p className='font-bold max-sm:hidden' >Back</p>
       </div>
      )}
      <Link to={'/'} className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' >
        <h1 className='text-3xl text-green-700 font-extrabold ' >flair</h1>
      </Link>
      </header>
  )
}

export default Header
