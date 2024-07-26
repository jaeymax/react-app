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
      <Link to={'/'} className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' >
        <h1 className='text-3xl text-green-700 font-extrabold ' >flair</h1>
      </Link>
      </header>
  )
}

export default Header
