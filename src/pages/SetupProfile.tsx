import Header from "../components/Header"
import ProfileCompletion from "../components/ProfileCompletion"
import SetupProfileItem from "../components/SetupProfileItem";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react';
import { WorkOutline } from "@mui/icons-material";

const SetupProfile = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [workExperience, setWorkExperience] = useState(false);

  const [education, setEducation] = useState(false);

  const [accomplishments, setAccomplishments] = useState(false);

  const [upload, setUpload] = useState(false);


  const openWorkExperienceModal = () =>{
     setWorkExperience(true);
  }

  const openEducationModal = () =>{
    setEducation(true);
  }

  const openAccomplishmentsModal = () =>{
    setAccomplishments(true);
  }

  const openUploadModal = () =>{
    setUpload(true);
  }


  const closeWorkExperienceModal = () =>{
    setWorkExperience(false);
 }

 const closeEducationModal = () =>{
   setEducation(false);
 }

 const closeAccomplishmentsModal = () =>{
   setAccomplishments(false);
 }

 const closeUploadModal = () =>{
   setUpload(false);
 }



  useEffect(()=>{

    const handleResize = () =>{
      setIsSmallScreen(window.innerWidth < 640);
    }
    
    window.addEventListener('resize', handleResize);

    return ()=> window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <div className="flex flex-col h-full" >
       <Header/>
       <div className="flex gap-14 py-14 px-5">
         {!isSmallScreen && <ProfileCompletion hide = {false} />}
          
          <div className="flex flex-col gap-6 w-full setup-profile mx-auto  max-w-[650px] min-w-[350px]" >
            <h2 className="font-bold text-2xl" >Set up your profile.</h2>
            {isSmallScreen && <ProfileCompletion hide = {true}/>}
            <div className="profile-items flex flex-col gap-5">
               <SetupProfileItem icon = {<LibraryBooksIcon fontSize="large" />}  name="Education" info = "School info, field of study"/>
               <SetupProfileItem icon = {<WorkOutline fontSize="large" className="text-green-700" />} name="Work Experience" info="Where you've worked your role" />
               <SetupProfileItem icon = {<StarHalfIcon fontSize="large" className="text-blue-400" />} name="Interest & Skills" info = "Career interests and skillset" />
               <SetupProfileItem icon = {<WorkspacePremiumIcon fontSize="large" className="text-red-600" />} name="Certifications" info="Certifications worth highlighting" />
               <SetupProfileItem icon = {<EmojiEventsIcon fontSize="large" className="text-yellow-600" />} name="Accomplishments" info="Personal achievement & impact" />
               <SetupProfileItem icon = {<CloudUploadIcon fontSize="large" className="text-gray-400" />} name="Upload Resume" info="CV, portfolio"  />
            </div>
            <div className="flex justify-between gap-5">
              <button className="font-bold p-4 border flex-1 rounded-sm hover:bg-gray-50">I'll do it later</button>
              <button className="font-bold border flex-1 text-white bg-black rounded-sm hover:bg-zinc-800" >Done</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default SetupProfile
