import ModalHeader from "../ModalHeader/ModalHeader"

const UploadResume = () => {
  return (
    <div className="flex flex-col h-full" >
      <ModalHeader name="Upload Resume" />
      <div className="p-10 flex flex-col gap-10">
          <div className=" flex flex-col gap-3">
            <h3 className="font-bold" >Resume/CV</h3>
            <p className="text-gray-500">Format should be either .pdf .docx, .doc</p>
            <div className="border border-dashed px-5 py-8" >
                <input type="file" name="" id="" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold" >Other files eg. portfolio</h3>
            <p className="text-gray-500" >Format should be either .pdf, .docx, .doc</p>
            <div className="border border-dashed px-5 py-8" >
               <button>Browse</button>
            </div>
          </div>
          <div>
          <button className="text-white bg-black font-bold w-28 rounded-sm h-14 float-right" >Save</button>
          </div>
      </div>
    </div>
  )
}

export default UploadResume
