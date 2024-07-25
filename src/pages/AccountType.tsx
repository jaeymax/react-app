import Header from "../components/Header"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

const AccountType = () => {

  let navigate = useNavigate();
  
  const [candidate, setCandidate] = useState(false);
  const [employer, setEmployer] = useState(false);
  const [mentor, setMentor] = useState(false);
  const [trainer, setTrainer] = useState(false);


  const handleClick = () =>{
      navigate('/career-status')
      
  }

  return (
    <div className="flex flex-col h-full" >
      <Header/>
      <div className="p-5 flex-1 w-full mx-auto max-w-[700px]" >
         <div className="flex flex-col gap-12">
           <h2 className="font-bold text-3xl" >What type of account are you setting up?</h2>
           <div className="flex flex-col gap-12" >
           <div className="grid gap-7 mx-auto grid-cols-1 sm:grid-cols-2" >
            <Card isClicked = {candidate} updateClicked={setCandidate} imageUrl="https://cdn-icons-png.flaticon.com/512/4470/4470321.png" accountType="Candidate" info="A gruaduate looking for an employment opportunity" comingSoon = {false} />
            <Card isClicked = {employer} updateClicked={setEmployer} imageUrl="https://cdn-icons-png.flaticon.com/512/1693/1693866.png" accountType="Employer" info="An organisation looking to hire top talents" comingSoon = {false} />
            <Card isClicked = {mentor} updateClicked={setMentor} imageUrl="https://cdn-icons-png.flaticon.com/512/2643/2643491.png" accountType="Mentor" info="A professional helping others to navigate their careers"comingSoon = {true} />
            <Card isClicked ={trainer} updateClicked={setTrainer} imageUrl="https://cdn-icons-png.flaticon.com/512/12620/12620295.png" accountType="Trainee"  info="An organisation offering training programs" comingSoon = {true} />
           </div>
           <button className="p-5 bg-black text-white w-full" onClick={handleClick} >Next</button>
           </div>
         </div>
      </div>
    </div>
  )
}

export default AccountType
