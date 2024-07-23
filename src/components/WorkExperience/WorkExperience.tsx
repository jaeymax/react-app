import ModalHeader from "../ModalHeader/ModalHeader"

const WorkExperience = () => {
  return (
    <div className="work-experience" >
        <ModalHeader name="Add Work Experience" />
        <input type="text" name="job-title" id="job-title" />
        <select name="company" id="company">
            <option value=""></option>
        </select>
        <input type="date" name="start-date" id="end-date" />
        <input type="checkbox" name="work-here" id="work-here" />
        <input type="submit" value="Save" />
    </div>
  )
}

export default WorkExperience
