import { useEffect } from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const VerifyAccount = () => {

  let navigate = useNavigate();

  useEffect(()=>{
    
    // This function navigates to the career type page 2seconds after being on the verify account page
    const navigateToAccountType = () =>{
         setTimeout(()=>{
           navigate('/account-type');
         }, 3000);
    }
    
    navigateToAccountType();

  },[navigate])

  return (
    <div className="flex flex-col h-full" >
      <Header/>
      <div className="flex-1  text-center p-5" >
        <div  className="">
        <div className="w-full flex flex-row items-center justify-between">
             <div className="w-[320px] h-[350px] mx-auto" >
              <img className="w-full object-contain" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" />
            </div>
        </div>
        <div className="flex flex-col gap-8">
            <h1 className="font-bold text-3xl">Verify your account</h1>
            <p className="text-gray-500" >A verification email will be sent to your email address provided. Click on the mail to verify your account.</p>
            <div className="border rounded-full p-3 w-[250px] bg-gray-100 mx-auto" >
              <h5 className="font-bold text-gray-500 " >mic***@inpathgroup.africa</h5>
            </div>
            <h6 className="text-green-700 font-bold" >Resend link</h6>
        </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyAccount
