import Navbar from "../components/Navbar"
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { IconButton } from "@mui/material";
import { useState } from "react";
;
const Home = () => {

  const [search, setSearch] = useState('');
  const [job, setJob] = useState('');

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
      <div className="bg-gray-100 flex-1 px-10 py-20 ">
        <div className="flex flex-col gap-5  max-w-[700px] mx-auto w-full" >
          <h1 className="py-3 text-5xl font-extrabold" >Discover a greater you</h1>
          <h2 className="py-1 font-bold text-2xl" >We help you <span className="text-green-700 " >find perfect job.</span></h2>
          <div className="flex items-center rounded-full bg-white  hidden sm:flex py-2">
          <div className="flex items-center bg-white h-10 rounded-l-full px-2 min-w-0" >
            <IconButton>
              <SearchIcon fontSize="large" className="text-gray-500" />
            </IconButton>
              <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="border-none p-1 flex-1 min-w-0 outline-none" autoComplete="off" name="search" id="search" placeholder="Try Civil Engineer" />
          </div>
          <div className="flex gap-4 min-w-0 h-10 rounded-r-full px-2 items-center justify-between bg-white border-l-2 border-gray-200" >
              <input value={job} onChange={(e)=>setJob(e.target.value)} placeholder="Jobs" type="text" className="min-w-0 p-1 outline-none px-5" name="jobs" id="jobs" />
             
                <ExpandMoreSharpIcon fontSize="large" className="cursor-pointer" />
                <ArrowCircleRightSharpIcon className="text-green-700 cursor-pointer arrow-right" fontSize="large" />
            
          </div>
          </div>
          <div className="flex-col gap-5 flex sm:hidden" >
          <div className="flex items-center bg-white rounded-full px-2" >
            <IconButton>
              <SearchIcon fontSize="large" className="text-gray-500" />
            </IconButton>
              <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="border-none p-1 flex-1 min-w-0 outline-none" autoComplete="off" name="search" id="search" placeholder="Try Civil Engineer" />
          </div>
          <div className="flex gap-4 px-2 items-center justify-between bg-white rounded-full" >
              <input value={job} onChange={(e)=>setJob(e.target.value)} placeholder="Jobs" type="text" className="min-w-0 p-1 outline-none px-5" name="jobs" id="jobs" />
              <IconButton>
                <ExpandMoreSharpIcon fontSize="large" />
              </IconButton>
          </div>
            <div className="text-center">
              <ArrowCircleRightSharpIcon fontSize="large" className="arrow-right text-green-700"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
