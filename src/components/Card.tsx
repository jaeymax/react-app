

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
