import './ProfileCompletionItem.css'


interface ProfileCompletionItemProps{
    name:string;
}

const ProfileCompletionItem:React.FC<ProfileCompletionItemProps> = ({name}) => {
  return (
    <div className="profile-completion-item" >
      {name}
      <input type="checkbox" name="education" id="education" />
    </div>
  )
}

export default ProfileCompletionItem
