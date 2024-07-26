import Header from "../components/Header";
import ProfileCompletion from "../components/ProfileCompletion";
import SetupProfileItem from "../components/SetupProfileItem";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import { WorkOutline } from "@mui/icons-material";
import EducationModal from "../components/EducationModal";
import WorkExperienceModal from "../components/WorkExperienceModal";
import AccomplishmentsModal from "../components/AccomplishmentsModal";
import UploadResumeModal from "../components/UploadResumeModal";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import useMaxWidth from "../hooks/useMaxWidth";

const SetupProfile = () => {

  let navigate = useNavigate();

  let maxWidth = useMaxWidth(640);

  const [workExperienceModal, setWorkExperienceModal] = useState(false);

  const [educationModal, setEducationModal] = useState(false);

  const [accomplishmentsModal, setAccomplishmentsModal] = useState(false);

  const [uploadModal, setUploadModal] = useState(false);

  const [workExperienceComplete, setWorkExperienceComplete] = useState(false);

  const [educationComplete, setEducationComplete] = useState(false);

  const [accomplishmentsComplete, setAccomplishmentsComplete] = useState(false);

  const [uploadComplete, setUpLoadComplete] = useState(false);

  const openWorkExperienceModal = () => {
    setWorkExperienceModal(true);
  };

  const openEducationModal = () => {
    setEducationModal(true);
  };

  const openAccomplishmentsModal = () => {
    setAccomplishmentsModal(true);
  };

  const openUploadModal = () => {
    setUploadModal(true);
  };

  const closeWorkExperienceModal = () => {
    setWorkExperienceModal(false);
  };

  const closeEducationModal = () => {
    setEducationModal(false);
  };

  const closeAccomplishmentsModal = () => {
    setAccomplishmentsModal(false);
  };

  const closeUploadModal = () => {
    setUploadModal(false);
  };


  const isButtonDisabled = () =>{
    return !(educationComplete && workExperienceComplete && uploadComplete && accomplishmentsComplete);
  }

  const handleClick = () =>{
     navigate('/');
  }

  return (
    <div className="flex flex-col h-full relative">
      <Header hasBackArrow = {true} />
      <div className="flex gap-14 py-14 px-10">
        {!maxWidth && (
          <ProfileCompletion
            isEducationComplete={educationComplete}
            isWorkExperienceComplete={workExperienceComplete}
            isAccomplishmentsComplete={accomplishmentsComplete}
            isUploadComplete={uploadComplete}
            hide={false}
          />
        )}
        {educationModal && <EducationModal closeModal={closeEducationModal} setEducationComplete = {setEducationComplete} />}
        {workExperienceModal && (
          <WorkExperienceModal setWorkExperienceComplete = {setWorkExperienceComplete} closeModal={closeWorkExperienceModal} />
        )}
        {accomplishmentsModal && (
          <AccomplishmentsModal closeModal={closeAccomplishmentsModal} setAccomplishmentsComplete = {setAccomplishmentsComplete} />
        )}
        {uploadModal && <UploadResumeModal setUploadComplete = {setUpLoadComplete} closeModal={closeUploadModal} />}

        <div className="flex flex-col gap-6 w-full setup-profile mx-auto  max-w-[650px] min-w-0">
          <h2 className="font-bold text-2xl">Set up your profile.</h2>
          {maxWidth && <ProfileCompletion fullWidth={true} hide={true} />}
          <div className="profile-items flex flex-col gap-5">
            <SetupProfileItem
              openModal={openEducationModal}
              icon={<LibraryBooksIcon fontSize="large" />}
              name="Education"
              info="School info, field of study"
            />
            <SetupProfileItem
              openModal={openWorkExperienceModal}
              icon={<WorkOutline fontSize="large" className="text-green-700" />}
              name="Work Experience"
              info="Where you've worked your role"
            />
            <SetupProfileItem
              openModal={() => {}}
              icon={<StarHalfIcon fontSize="large" className="text-blue-400" />}
              name="Interest & Skills"
              info="Career interests and skillset"
            />
            <SetupProfileItem
              openModal={() => {}}
              icon={
                <WorkspacePremiumIcon
                  fontSize="large"
                  className="text-red-600"
                />
              }
              name="Certifications"
              info="Certifications worth highlighting"
            />
            <SetupProfileItem
              openModal={openAccomplishmentsModal}
              icon={
                <EmojiEventsIcon fontSize="large" className="text-yellow-600" />
              }
              name="Accomplishments"
              info="Personal achievement & impact"
            />
            <SetupProfileItem
              openModal={openUploadModal}
              icon={
                <CloudUploadIcon fontSize="large" className="text-gray-400" />
              }
              name="Upload Resume"
              info="CV, portfolio"
            />
          </div>
          <div className="flex justify-between gap-5 max-sm:border-t-2 max-sum:py-10">
            <CustomButton
              styles="font-bold p-4 border w-full flex-1 rounded-sm hover:bg-gray-50 cursor-pointer"
              disabled={false}
              onClick={handleClick}
            >
             I'll do it later 
            </CustomButton>
            <CustomButton
              // styles="font-bold border flex-1 text-white bg-black rounded-sm hover:bg-zinc-800 cursor-pointer"
              styles="text-white bg-black font-bold w-28 rounded-sm flex-1"
              disabled={isButtonDisabled()}
              onClick={handleClick}
            >
              Done
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProfile;
