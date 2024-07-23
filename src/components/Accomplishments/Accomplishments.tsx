import ModalHeader from "../ModalHeader/ModalHeader"

const Accomplishments = () => {
  return (
    <div className="accomplishments" >
       <ModalHeader name="Add Accomplishments" />
       <div className="accomplishments-section">
          <div>
            <div>
                
            </div>
            <div>
                <textarea placeholder="Type something" name="accomplishment" id="accomplishment"></textarea>
            </div>
          </div>
          <input type="submit" value="Save" />
       </div>
    </div>
  )
}

export default Accomplishments
