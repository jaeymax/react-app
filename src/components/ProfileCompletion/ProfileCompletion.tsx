import ProfileCompletionItem from '../ProfileCompletionItem/ProfileCompletionItem';
import './ProfileCompletion.css';


const ProfileCompletion = () => {
  return (
    <div className="profile-completion" > 
      <div className="profile-completion-header" >
         <h2>Profile Completion</h2>
      </div>
      <div className="profile-completion-list">
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
