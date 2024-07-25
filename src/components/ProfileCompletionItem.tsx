

interface ProfileCompletionItemProps{
    name:string;
}

const ProfileCompletionItem:React.FC<ProfileCompletionItemProps> = ({name}) => {
  return (
    <div className="flex justify-between text-white font-bold p-5" >
      {name}
      <input type="checkbox" name="education" id="education" className="custom-checkbox" />
    </div>
  )
}

export default ProfileCompletionItem
