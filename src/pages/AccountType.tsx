import Header from "../components/Header"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import StandardButton from "../components/StandardButton";
import { cards } from "../data/cards";

const AccountType = () => {

  let navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState<number|null>(null);

  const isButtonDisabled = () =>{
      if(selectedCard == null)return true;
      return false;
  }



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
            {
              cards.map((card, index)=>(
                <Card
                  key={index}
                  accountType= {card.accountType}
                  imageUrl={card.imageUrl}
                  info={card.info}
                  comingSoon = {card.comingSoon}
                  isSelected = {index === selectedCard}
                  updateSelectedCard={setSelectedCard}
                  index={index}
                />
              ))
            }
           
           </div>
           <StandardButton
              styles="p-5 bg-black text-white font-bold w-full"
              onClick={handleClick}
              name="Next"
              disabled = {isButtonDisabled()}
           />
           </div>
         </div>
      </div>
    </div>
  )
}

export default AccountType
