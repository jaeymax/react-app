
import ProfileCompletionItem from '../ProfileCompletionItem/ProfileCompletionItem';

interface ProfileCompletionProps{
    hide:boolean;
}

const ProfileCompletion:React.FC<ProfileCompletionProps> = ({hide}) => {

  return (
    <div className="profile-completion w-[350px] bg-green-700 h-fit  " > 
      <div className="profile-completion-header p-5 text-white text-xl" >
         <h2 className='font-bold' >Profile Completion</h2>
      </div>
      <div className={`profile-completion-list ${hide?'hidden':''}`}>
          <ProfileCompletionItem name = 'Education'/>
          <ProfileCompletionItem name = 'Work Experience' />
          <ProfileCompletionItem name = 'Interest & Skills' />
          <ProfileCompletionItem name = 'Certifications' />
          <ProfileCompletionItem name = 'Accomplishments' />
          <ProfileCompletionItem name = 'Upload Resume' />
      </div>
    </div>
  )
}

export default ProfileCompletion
