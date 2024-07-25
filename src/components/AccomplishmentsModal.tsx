import { useState } from "react";
import ModalHeader from "./ModalHeader";
import StandardButton from "./StandardButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Modal from "./Modal";

interface ModalProps {
  closeModal: () => void;
}

const Accomplishments: React.FC<ModalProps> = ({ closeModal }) => {
  const [accomplishments, setAccomplishments] = useState("");

  const handleClick = () => {};

  return (
    <Modal name={"Add Accomplishments"} closeModal={closeModal}>
      <div className="p-10">
        <div className="flex flex-col gap-6  ">
          <div className="border rounded-sm  h-52">
            <div className="border p-3 flex gap-2 items-center">
              <FormatBoldIcon className="cursor-pointer" />
              <FormatUnderlinedIcon className="cursor-pointer" />
              <FormatItalicIcon className="cursor-pointer" />
              <FormatListBulletedIcon className="cursor-pointer" />
            </div>
            <div className="">
              <textarea
                value={accomplishments}
                onChange={(e) => setAccomplishments(e.target.value)}
                placeholder="Type something"
                className="w-full h-full resize-none outline-none p-5"
                name="accomplishment"
                id="accomplishment"
              ></textarea>
            </div>
          </div>

          <div>
            <StandardButton
              styles="text-white bg-black font-bold w-28 rounded-sm h-14 float-right"
              name="Save"
              disabled={accomplishments === "" ? true : false}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </Modal>

  );
};

export default Accomplishments;
