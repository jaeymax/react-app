
import ProfileCompletionItem from './ProfileCompletionItem';



const ProfileCompletion:React.FC<ProfileCompletionProps> = ({hide, fullWidth, isEducationComplete, isWorkExperienceComplete, isAccomplishmentsComplete, isUploadComplete}) => {

  return (
    <div className={`profile-completion w-[350px] custom-green h-fit rounded-sm ${fullWidth?'w-full':''}`} > 
      <div className="px-5 py-8 text-white text-xl" >
         <h2 className='font-bold' >Profile Completion</h2>
      </div>
      <div className={`profile-completion-list ${hide?'hidden':''}`}>
          <ProfileCompletionItem name = 'Education'  isProfileComplete = {isEducationComplete} />
          <ProfileCompletionItem name = 'Work Experience' isProfileComplete = {isWorkExperienceComplete} />
          <ProfileCompletionItem name = 'Interest & Skills'  />
          <ProfileCompletionItem name = 'Certifications' />
          <ProfileCompletionItem name = 'Accomplishments' isProfileComplete = {isAccomplishmentsComplete} />
          <ProfileCompletionItem name = 'Upload Resume' isProfileComplete = {isUploadComplete} />
      </div>
    </div>
  )
}

export default ProfileCompletion
