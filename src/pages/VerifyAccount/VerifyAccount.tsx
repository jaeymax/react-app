import Header from "../../components/Header/Header"

const VerifyAccount = () => {
  return (
    <div className="flex flex-col h-full" >
      <Header/>
      <div className="flex-1 grid place-items-center text-center p-5" >

        <div  className="verify-account-content border">
        <div className="verify-acccount-image">

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
