import Header from "../../components/Header/Header"
import './AccountType.css'

const AccountType = () => {
  return (
    <div className="account-type" >
      <Header/>
      <div className="account-body" >
         <div className="account-content">
           <h2>What type of account are you setting up?</h2>
           <div className="card-container-wrapper" >
           <div className="card-container" >
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
           </div>
           <button>Next</button>
           </div>
         </div>
      </div>
    </div>
  )
}

export default AccountType
