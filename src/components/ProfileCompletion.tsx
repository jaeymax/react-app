
import ProfileCompletionItem from './ProfileCompletionItem';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ProfileCompletion:React.FC<ProfileCompletionProps> = ({hide, fullWidth, isEducationComplete, isWorkExperienceComplete, isAccomplishmentsComplete, isUploadComplete}) => {

  return (
    <div className={`profile-completion w-[350px] custom-green h-fit rounded-sm ${fullWidth?'w-full':''}`} > 
      <div className="px-5 py-4 text-white text-xl max-h-[100px] min-h-[100px] h-full flex items-center justify-between " >
         <h2 className='font-bold flex-1' >Profile Completion</h2>
         <div className='  grid place-items-center max-w-[100px] max-h-[75px] w-full h-full  min-w-0 min-h-0' >
         <CircularProgressbar
          value={0}
          text='0%'
          className='w-full h-full'
          styles={{
            path:{
              stroke:'#fff'
            },
            text:{
              fill:"#fff"
            }
          }}
         />
         </div>
      </div>
      <div className={`profile-completion-list ${hide?'hidden':''}`}>
          <ProfileCompletionItem name = 'Education'  isProfileComplete = {isEducationComplete} />
          <ProfileCompletionItem name = 'Work Experience' isProfileComplete = {isWorkExperienceComplete} />
          <ProfileCompletionItem name = 'Interest & Skills' isProfileComplete = {false}  />
          <ProfileCompletionItem name = 'Certifications'  isProfileComplete = {false} />
          <ProfileCompletionItem name = 'Accomplishments' isProfileComplete = {isAccomplishmentsComplete} />
          <ProfileCompletionItem name = 'Upload Resume' isProfileComplete = {isUploadComplete} />
      </div>
    </div>
  )
}

export default ProfileCompletion
