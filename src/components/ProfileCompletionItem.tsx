

interface ProfileCompletionItemProps{
    name:string;
}

const ProfileCompletionItem:React.FC<ProfileCompletionItemProps> = ({name}) => {
  return (
    <div className="flex justify-between text-white font-bold p-5" >
      {name}
      <input type="radio" name="education" id="education" className="rounded-e-full" />
    </div>
  )
}

export default ProfileCompletionItem
