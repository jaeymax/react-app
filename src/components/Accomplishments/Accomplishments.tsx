import ModalHeader from "../ModalHeader/ModalHeader"

const Accomplishments = () => {
  return (
    <div className="flex flex-col h-full" >
       <ModalHeader name="Add Accomplishments" />
       <div className="p-10">

          <div className="flex flex-col gap-6" >
          <div className="border rounded-sm" >
            <div>
                
            </div>
            <div className="bg-blue-100">
                <textarea placeholder="Type something" className="w-full h-full resize-none outline-none p-5" name="accomplishment" id="accomplishment"></textarea>
            </div>
          </div>

          <div>
          <button className="text-white bg-black font-bold w-28 rounded-sm h-14 float-right" >Save</button>
          </div>

          </div>


       </div>
    </div>
  )
}

export default Accomplishments
