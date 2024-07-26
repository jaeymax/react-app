import { useState } from "react";
import ModalHeader from "./ModalHeader";
import CustomButton from "./CustomButton";
import Modal from "./Modal";



const Education: React.FC<EducationModalProps> = ({ closeModal, setEducationComplete }) => {
  const [institution, setInstitution] = useState("");
  const [qualification, setQualification] = useState("");
  const [courseCatetory, setCourseCategory] = useState("");
  const [courseOfStudy, setCourseOfStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const ifAllFormFieldsFilled = () => {
    const result =
      institution &&
      qualification &&
      courseCatetory &&
      courseOfStudy &&
      startDate &&
      endDate;
    if (result !== "") return true;
    return false;
  };

  const handleClick = () => {
    setEducationComplete(true);
    closeModal(); 
  };

  // absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-4/5

  return (
    <Modal name="Add Education" closeModal={closeModal}>
      <div className="p-10 flex flex-col gap-5 ">
        <div className="flex flex-col w-full">
          <label className="text-gray-500" htmlFor="institution">
            Institution
          </label>
          <input
            onChange={(e) => setInstitution(e.target.value)}
            value={institution}
            className="border outline-none p-5 rounded-sm h-16"
            placeholder="Search institution"
            type="text"
            name="institution"
            id="institution"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col w-full min-w-0">
            <label className="text-gray-500" htmlFor="qualification">
              Qualification
            </label>
            <input
              onChange={(e) => setQualification(e.target.value)}
              value={qualification}
              className="border outline-none p-5 rounded-sm h-14"
              type="text"
              name="qualification"
              id="qualification"
            />
          </div>
          <div className="flex flex-col w-full min-w-0">
            <label className="text-gray-500" htmlFor="course-category">
              Course Category
            </label>
            <input
              onChange={(e) => setCourseCategory(e.target.value)}
              value={courseCatetory}
              className="border outline-none p-5 rounded-sm h-14"
              type="text"
              name="course-category"
              id="course-category"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-gray-500" htmlFor="course-of-study">
            Course of study
          </label>
          <input
            onChange={(e) => setCourseOfStudy(e.target.value)}
            value={courseOfStudy}
            className="border outline-none p-5 rounded-sm h-14"
            type="text"
            name="course-of-study"
            id="course-of-study"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col w-full min-w-0">
            <label className="text-gray-500" htmlFor="company">
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
          <div className="flex flex-col w-full min-w-0">
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

export default Education;
