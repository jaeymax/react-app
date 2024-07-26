import ModalHeader from "./ModalHeader";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Uploader from "./Uploader";
import { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";



const UploadResume: React.FC<UploadResumeModalProps> = ({ closeModal, setUploadComplete }) => {
  const [resume, setResume] = useState<File | null>(null);
  const [other, setOther] = useState<File | null>(null);

  const allFilesUploaded = () => {
    const result = resume && other;
    if (result == null) {
      return false;
    }
    return true;
  };

  const handleClick = () => {
    setUploadComplete(true);
    closeModal();
  };

  return (
    <Modal name="Upload Resume" closeModal={closeModal}>
      <div className="p-10 flex flex-col gap-10">
        <div className=" flex flex-col gap-3">
          <h3 className="font-bold">Resume/CV</h3>
          <p className="text-gray-500">
            Format should be either .pdf .docx, .doc
          </p>
          <Uploader file={resume} updateFile={setResume} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Other files eg. portfolio</h3>
          <p className="text-gray-500">
            Format should be either .pdf, .docx, .doc
          </p>
          <Uploader file={other} updateFile={setOther} />
        </div>
        <CustomButton
          styles="text-white bg-black font-bold w-28 rounded-sm h-14 float-right"
          disabled={!allFilesUploaded()}
          onClick={handleClick}
        >
          Save
        </CustomButton>
      </div>
    </Modal>
  );
};

export default UploadResume;
