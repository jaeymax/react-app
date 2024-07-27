import { ArrowBack } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import useMaxWidth from '../hooks/useMaxWidth';
import { IconButton } from '@mui/material';


const Header:React.FC<HeaderProps> = ({hasBackArrow}) => {

  let navigate = useNavigate();

  let maxWidth = useMaxWidth(768);

  const goBack = () =>{
     navigate(-1);
  }

  return (
    <header className="shadow-sm  min-h-24 flex items-center px-7 relative">
      {hasBackArrow && (
       <div className='flex gap-3 items-center'>
        <IconButton onClick={goBack} >
          <ArrowBack className='text-black' />
        </IconButton>
          {maxWidth && (
            <p className='font-bold max-sm:hidden' >Back</p>
          )}
         
       </div>
      )}
      <Link to={'/'}  className='flex items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' >
        <h1 className='text-3xl text-green-700 font-extrabold ' >flair</h1>
        <div className='w-10 h-10' >

        <svg className='w-[80px]'  fill='#15803d' viewBox="0 0 256 256" version="1.1" id="Layer_1"  xmlns="http://www.w3.org/2000/svg"> 
        <path  d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"/>
        </svg>
        </div>
      </Link>
      </header>
  )
}

export default Header
