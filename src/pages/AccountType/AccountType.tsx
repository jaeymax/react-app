import Header from "../../components/Header/Header"
import './AccountType.css'

const AccountType = () => {
  return (
    <div className="flex flex-col h-full" >
      <Header/>
      <div className="p-5 flex-1 w-full mx-auto max-w-[700px]" >
         <div className="flex flex-col gap-12 bg-blue-100">
           <h2 className="font-bold text-3xl" >What type of account are you setting up?</h2>
           <div className="flex flex-col gap-12" >
           <div className="card-container grid gap-7" >
              <div className="w-[300px] h-[200px] border border-gray-950"></div>
              <div className="w-[300px] h-[200px] border border-gray-950"></div>
              <div className="w-[300px] h-[200px] border border-gray-950"></div>
              <div className="w-[300px] h-[200px] border border-gray-950"></div>
           </div>
           <button className="p-5 bg-black text-white w-full" >Next</button>
           </div>
         </div>
      </div>
    </div>
  )
}

export default AccountType
