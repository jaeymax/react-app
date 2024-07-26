import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CustomButton from "./CustomButton";
import Modal from "./Modal";



const WorkExperience: React.FC<WorkExperienceModalProps> = ({ closeModal, setWorkExperienceComplete }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState<boolean>(false);

  const ifAllFormFieldsFilled = (): boolean => {
    const result = jobTitle && company && startDate && endDate;
    return result !== "";
  };

  const handleClick = () => {
    setWorkExperienceComplete(true);
    closeModal();
  };

  return (
    <Modal name="Add Work Experience" closeModal={closeModal}>
      <div className="bg-blue-100 px-10 py-3 flex items-center justify-between">
        <InfoIcon className="text-blue-500" />
        <p>
          Link your NSS details to Flair to make you more credible to employers.
        </p>
        <button className="bg-black text-white p-4 font-bold w-36">
          Link NSS
        </button>
      </div>
      <div className="flex-1 p-10 flex flex-col gap-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-500" htmlFor="job-title">
            Job Title
          </label>
          <input
            onChange={(e) => setJobTitle(e.target.value)}
            value={jobTitle}
            className="border outline-none p-5 rounded-sm h-16"
            type="text"
            name="job-title"
            id="job-title"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-500" htmlFor="company">
            Company
          </label>
          <input
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            className="border outline-none p-5 rounded-sm h-14"
            placeholder="Search company"
            type="text"
            name="company"
            id="company"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-gray-500" htmlFor="start-date">
              Start date
            </label>
            <input
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              className="border outline-none p-5 rounded-sm h-14"
              type="text"
              name="start-date"
              id="start-date"
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0 ">
            <label className="text-gray-500" htmlFor="company">
              End date
            </label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              className="border outline-none p-5 rounded-sm h-14"
              type="text"
              name="end-date"
              id="end-date"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <input
            onChange={(e) => setCurrentlyWorking(e.target.checked)}
            checked={currentlyWorking}
            type="checkbox"
            name="work-here"
            id="work-here"
          />
          <p>I currently work here</p>
        </div>

        <div>
          <CustomButton
            onClick={handleClick}
            styles="text-white bg-black font-bold w-28 rounded-sm h-14 float-right"
            disabled={!ifAllFormFieldsFilled()}
          >
            Save
          </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default WorkExperience;
