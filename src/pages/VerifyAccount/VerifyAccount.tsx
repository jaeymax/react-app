import Header from "../../components/Header/Header"
import './VerifyAccount.css'

const VerifyAccount = () => {
  return (
    <div className="verify-account" >
      <Header/>
      <div className="verify-account-body" >

        <div className="verify-account-content">
        <div className="verify-acccount-image">

        </div>
        <div className="verify-account-details">
            <h1>Verify your account</h1>
            <p>A verification email will be sent to your email address provided. Click on the mail to verify your account.</p>
            <div>
              <h5>mic***@inpathgroup.africa</h5>
            </div>
            <h6>Resend link</h6>
        </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyAccount
