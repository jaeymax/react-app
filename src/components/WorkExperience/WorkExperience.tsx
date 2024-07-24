import ModalHeader from "../ModalHeader/ModalHeader"
import InfoIcon from '@mui/icons-material/Info';

const WorkExperience = () => {
  return (
    <div className="flex flex-col h-full" >
        <ModalHeader name="Add Work Experience" />
        <div className="bg-blue-100 px-10 py-3 flex items-center justify-between" >
          <InfoIcon className="text-blue-500" />
          <p>Link your NSS details to Flair to make you more credible to employers.</p>
          <button className="bg-black text-white p-4 font-bold" >Link NSS</button>
        </div>
        <div className="flex-1 p-10 flex flex-col gap-5">
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="job-title">Job Title</label>
            <input className="border outline-none p-5 rounded-sm h-16" type="text" name="job-title" id="job-title" />
          </div>
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="company">Company</label>
            <input className="border outline-none p-5 rounded-sm h-14" placeholder="Search company" type="text" name="company" id="company" />
          </div>
          
          <div className="flex gap-6" >
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="company">Start date</label>
            <input className="border outline-none p-5 rounded-sm h-14" type="text" name="company" id="company" />
          </div>
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="company">End date</label>
            <input className="border outline-none p-5 rounded-sm h-14" type="text" name="company" id="company" />
          </div>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="work-here" id="work-here" />
            <p>I currently work here</p>
          </div>

          <div>
          <button className="text-white bg-black font-bold w-28 rounded-sm h-14 float-right" >Save</button>
          </div>
          
        </div>
    </div>
  )
}

export default WorkExperience
