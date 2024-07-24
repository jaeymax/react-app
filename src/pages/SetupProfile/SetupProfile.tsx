import Header from "../../components/Header/Header"
import ProfileCompletion from "../../components/ProfileCompletion/ProfileCompletion"
import SetupProfileItem from "../../components/SetupProfileItem/SetupProfileItem";
import './SetupProfile.css';

const SetupProfile = () => {
  return (
    <div className="setup-profile" >
       <Header/>
       <div className="setup-profile-body">
          <ProfileCompletion/>
          <div className="flex flex-col gap-6 w-full" >
            <h2 className="font-bold text-2xl" >Set up your profile.</h2>
            <div className="profile-items flex flex-col gap-5">
               <SetupProfileItem name="Education" info = "School info, field of study"/>
               <SetupProfileItem name="Work Experience" info="Where you've worked your role" />
               <SetupProfileItem name="Interest & Skills" info = "Career interests and skillset" />
               <SetupProfileItem name="Certifications" info="Certifications worth highlighting" />
               <SetupProfileItem name="Accomplishments" info="Personal achievement & impact" />
               <SetupProfileItem name="Upload Resume" info="CV, portfolio"  />
            </div>
            <div className="flex justify-between gap-5">
              <button className="font-bold p-4 border flex-1">I'll do it later</button>
              <button className="font-bold border flex-1" >Done</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default SetupProfile
