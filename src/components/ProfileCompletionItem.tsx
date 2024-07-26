



const ProfileCompletionItem:React.FC<ProfileCompletionItemProps> = ({name, isProfileComplete}) => {

  return (
    <div className="flex justify-between text-white font-bold p-5" >
      {name}
      <input type="checkbox" name="education" id="education" className="custom-checkbox" readOnly checked = {isProfileComplete} />
    </div>
  )
}

export default ProfileCompletionItem
