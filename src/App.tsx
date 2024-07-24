import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import VerifyAccount from './pages/VerifyAccount/VerifyAccount';
import CareerStatus from './pages/CareerStatus/CareerStatus';
import Education from './components/Education/Education';
import WorkExperience from './components/WorkExperience/WorkExperience';
import UploadResume from './components/UploadResume/UploadResume';
import Accomplishments from './components/Accomplishments/Accomplishments';
import AccountType from './pages/AccountType/AccountType';
import SetupProfile from './pages/SetupProfile/SetupProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
          <Route path='/create-account' element = {<CreateAccount/>} />
          <Route path='/verify-account' element = {<VerifyAccount/>} />
          <Route path='/career-status' element = {<CareerStatus/>} />
          <Route path='/education' element = {<Education/>} />
          <Route path = '/work-experience' element = {<WorkExperience/>}/>
          <Route path='/upload-resume' element = {<UploadResume/>} />
          <Route  path='/accomplishments' element = {<Accomplishments/>} />
          <Route path='/account-type' element = {<AccountType/>} />
          <Route path='setup-profile' element = {<SetupProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
