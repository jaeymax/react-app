import { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import { formatIcons } from "../data/formatIcons";
import FormatIcon from "./FormatIcon";

const Accomplishments: React.FC<AccomplishmentsModalProps> = ({
  closeModal,
  setAccomplishmentsComplete,
  isAccomplishmentsComplete,
  updateProgress
}) => {
  const [accomplishments, setAccomplishments] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<null | number>(null);

  const handleClick = () => {
    setAccomplishmentsComplete(true);
    updateProgress(isAccomplishmentsComplete)
    closeModal();
  };

  return (
    <Modal name={"Add Accomplishments"} closeModal={closeModal}>
      <div className="p-10">
        <div className="flex flex-col gap-6  ">
          <div className="b rounded-sm  ">
            <div className="border p-3 flex gap-2 items-center">
              {formatIcons.map((icon, index) => (
                <FormatIcon
                  updateSelectedIcon={setSelectedIcon}
                  key={index}
                  selectedIcon={selectedIcon}
                  index={index}
                >
                  {icon}
                </FormatIcon>
              ))}
            </div>
            <div className="h-40 border">
              <textarea
                value={accomplishments}
                onChange={(e) => setAccomplishments(e.target.value)}
                placeholder="Type something"
                className="overflow-hidden w-full h-full resize-none outline-none p-5"
                name="accomplishment"
                id="accomplishment"
              />
            </div>
          </div>
          <div>
            <CustomButton
              styles="text-white bg-black font-bold w-28 rounded-sm h-14 float-right"
              disabled={accomplishments === "" ? true : false}
              onClick={handleClick}
            >
              Save
            </CustomButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Accomplishments;
