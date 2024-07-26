import React from 'react'

// Employer https://cdn-icons-png.flaticon.com/512/1693/1693866.png
// trainee https://cdn-icons-png.flaticon.com/512/12620/12620295.png
// Mentor https://cdn-icons-png.flaticon.com/512/2643/2643491.png
// Candidate https://cdn-icons-png.flaticon.com/512/4470/4470321.png
// trainee2 https://image.pngaaa.com/350/5091350-middle.png
//300px 200px 
// 
interface CardProps{
    index:number,
    accountType:string,
    info:string;
    comingSoon:boolean;
    imageUrl:string;
    isSelected:boolean;
    updateSelectedCard:React.Dispatch<React.SetStateAction<number|null>>;
}

const Card:React.FC<CardProps> = ({index, accountType, info, comingSoon, imageUrl, isSelected, updateSelectedCard}) => {


  const handleClick = () =>{
     updateSelectedCard(index);
  }

  return (
    <div onClick={handleClick} className={` ${isSelected?'bg-gray-100 border-black border':''} flex flex-col gap-4 relative p-5 border cursor-pointer hover:bg-gray-50`}>
      <div className='w-10 h-10' >
        <img className='w-full h-full object-contain' src={imageUrl} alt="" />
      </div>
      <div className='flex flex-col gap-3' >
        <h1 className={`${comingSoon?'text-gray-500':'text-black'} font-bold text-xl`} >{accountType}</h1>
        <p className="text-gray-500" >{info}</p>
      </div>
      {comingSoon && <div className='bg-[#F88E0415] text-[#F88E04] absolute top-0 right-0 left-2/3 font-semibold' >Coming soon</div>}
    </div>
  )
}

export default Card
