import ModalHeader from "../ModalHeader/ModalHeader"


const Education = () => {
  return (
    <div>
        <ModalHeader name="Add Education" />
      <input type="text" name="Institution" id="Institution" placeholder="Search institution" />
      <select name="Qualification" id="Qualification">
        <option value=""></option>
      </select>
      <input type="text" name="course-of-study" id="course-of-study" />
      <input type="datetime" name="start-date" id="end-date" />
      <input type="submit" value="Save" />
    </div>
  )
}

export default Education
