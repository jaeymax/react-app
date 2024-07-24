import Navbar from "../../components/Navbar/Navbar"
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <header className="p-2 border-b" >
         <div className="flex bg-gray-100 mx-auto w-80 p-2" >
          <div className="bg-white rounded py-2 px-4 border" >
            <p className="font-extrabold text-xs" >For Students & Graduates</p>
          </div>
          <div className="py-2 px-4 font-semibold" >
             <p className="text-xs" >For Partners</p>
          </div>
         </div>
      </header>
         <Navbar/>
      <div className="bg-gray-100 flex-1 grid place-items-center p-10">
        <div className="flex flex-col gap-5" >
          <h1 className="py-3 text-5xl font-extrabold" >Discover a greater you</h1>
          <h2 className="py-1 font-bold text-2xl" >We help you <span className="text-green-700 " >find perfect job.</span></h2>
          <div className="flex items-center rounded-full bg-white p-3 hidden sm:flex">
            <div className="flex gap-4 items-center" >
              <SearchIcon fontSize="large" className="text-gray-500" />
              <input type="text" className="border-none  outline-none" autoComplete="off" name="search" id="search" placeholder="Try Civil Engineer" />
            </div>
            <div className="flex gap-4 items-center" >
              <input type="text" className="outline-none px-5 border-r-0 border-l-2" name="jobs" id="jobs" />
              <ExpandMoreSharpIcon/>
              <ArrowCircleRightSharpIcon fontSize="large" className="text-green-700 "/>
            </div>
          </div>
          <div className="flex-col gap-5 flex sm:hidden" >
          <div className="flex gap-4 items-center bg-white rounded-full p-3" >
              <SearchIcon fontSize="large" className="text-gray-500" />
              <input type="text" className="border-none  outline-none" autoComplete="off" name="search" id="search" placeholder="Try Civil Engineer" />
          </div>
          <div className="flex gap-4 items-center justify-between bg-white rounded-full p-3" >
              <input type="text" className="outline-none px-5" name="jobs" id="jobs" />
              <ExpandMoreSharpIcon fontSize="large" />
          </div>
            <div className="text-center">
              <ArrowCircleRightSharpIcon fontSize="large" className="text-green-700"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
