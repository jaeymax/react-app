import ModalHeader from "../ModalHeader/ModalHeader"


const Education = () => {
  return (
    <div className="flex flex-col h-full" >
        <ModalHeader name="Add Education" />
        <div className="p-10 flex flex-col gap-5 bg-blue-100 ">
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="institution">Institution</label>
            <input className="border outline-none p-5 rounded-sm h-16" placeholder="Search institution" type="text" name="institution" id="institution" />
          </div>
          
          <div className="flex gap-6" >
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="qualification">Qualification</label>
            <input className="border outline-none p-5 rounded-sm h-14" type="text" name="qualification" id="qualification" />
          </div>
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="course-category">Course Category</label>
            <input className="border outline-none p-5 rounded-sm h-14" type="text" name="course-category" id="course-category" />
          </div>
          </div>

          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="course-of-study">Course of study</label>
            <input className="border outline-none p-5 rounded-sm h-14"  type="text" name="course-of-study" id="course-of-study" />
          </div>

          <div className="flex gap-6" >
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="company">Start date</label>
            <input className="border outline-none p-5 rounded-sm h-14" type="text" name="company" id="company" />
          </div>
          <div className="flex flex-col w-full" >
            <label className="text-gray-500" htmlFor="company">End date</label>
            <input className="border outline-none p-5 rounded-sm h-14" type="text" name="company" id="company" />
          </div>
          </div>

          <div>
          <button className="text-white bg-black font-bold w-28 rounded-sm h-14 float-right" >Save</button>
          </div>
          
        </div>
    </div>
  )
}

export default Education
