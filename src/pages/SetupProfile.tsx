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
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Accomplishments from "../components/Accomplishments";
import UploadResume from "../components/UploadResume";


const SetupProfile = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [workExperienceModal, setWorkExperienceModal] = useState(false);

  const [educationModal, setEducationModal] = useState(false);

  const [accomplishmentsModal, setAccomplishmentsModal] = useState(false);

  const [uploadModal, setUploadModal] = useState(false);

  const [workExperienceProfile, setWorkExperienceProfile] = useState(false);

  const [educationProfile, setEducationProfile] = useState(false);

  const [accomplishmentsProfile, setAccomplishmentsProfile] = useState(false);

  const [uploadProfile, setUpLoadProfile] = useState(false);

  


  const openWorkExperienceModal = () =>{
     setWorkExperienceModal(true);
  }

  const openEducationModal = () =>{
    setEducationModal(true);
  }

  const openAccomplishmentsModal = () =>{
    setAccomplishmentsModal(true);
  }

  const openUploadModal = () =>{
    setUploadModal(true);
  }


  const closeWorkExperienceModal = () =>{
    setWorkExperienceModal(false);
 }

 const closeEducationModal = () =>{
   setEducationModal(false);
 }

 const closeAccomplishmentsModal = () =>{
   setAccomplishmentsModal(false);
 }

 const closeUploadModal = () =>{
   setUploadModal(false);
 }



  useEffect(()=>{

    const handleResize = () =>{
      setIsSmallScreen(window.innerWidth < 640);
    }
    
    window.addEventListener('resize', handleResize);

    return ()=> window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <div className="flex flex-col h-full relative" >
       <Header/>
       <div className="flex gap-14 py-14 px-5">
         {!isSmallScreen && <ProfileCompletion hide = {false} />}
          

          <div className="flex flex-col gap-6 w-full setup-profile mx-auto  max-w-[650px] min-w-0" >
            <h2 className="font-bold text-2xl" >Set up your profile.</h2>
            {isSmallScreen && <ProfileCompletion fullWidth = {true} hide = {true}/>}
            <div className="profile-items flex flex-col gap-5">
               <SetupProfileItem openModal={openEducationModal} icon = {<LibraryBooksIcon fontSize="large" />}  name="Education" info = "School info, field of study"/>
               <SetupProfileItem openModal={openWorkExperienceModal} icon = {<WorkOutline fontSize="large" className="text-green-700" />} name="Work Experience" info="Where you've worked your role" />
               <SetupProfileItem openModal={()=>{}} icon = {<StarHalfIcon fontSize="large" className="text-blue-400" />} name="Interest & Skills" info = "Career interests and skillset" />
               <SetupProfileItem openModal={()=>{}} icon = {<WorkspacePremiumIcon fontSize="large" className="text-red-600" />} name="Certifications" info="Certifications worth highlighting" />
               <SetupProfileItem openModal={openAccomplishmentsModal} icon = {<EmojiEventsIcon fontSize="large" className="text-yellow-600" />} name="Accomplishments" info="Personal achievement & impact" />
               <SetupProfileItem openModal={openUploadModal} icon = {<CloudUploadIcon fontSize="large" className="text-gray-400" />} name="Upload Resume" info="CV, portfolio"  />
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
