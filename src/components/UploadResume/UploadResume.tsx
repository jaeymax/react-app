import ModalHeader from "../ModalHeader/ModalHeader"

const UploadResume = () => {
  return (
    <div className="upload-resume" >
      <ModalHeader name="Upload Resume" />
      <div className="upload-section">
          <div className="resume">
            <h3>Resume/CV</h3>
            <p>Format should be either .pdf .docx, .doc</p>
            <div>
                <button>Browse</button>
            </div>
          </div>
          <div className="other-files">
            <h3>Other files eg. portfolio</h3>
            <p>Format should be either .pdf, .docx, .doc</p>
            <div>
               <button>Browse</button>
            </div>
          </div>
          <input type="submit" value="Save" />
      </div>
    </div>
  )
}

export default UploadResume
