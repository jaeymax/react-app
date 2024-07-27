import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import VerifyAccount from './pages/VerifyAccount';
import CareerStatus from './pages/CareerStatus';
import AccountType from './pages/AccountType';
import SetupProfile from './pages/SetupProfile';
import Login from './pages/Login';

function App() {
  return (
    <div className="App h-screen w-full relative">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
          <Route path='/create-account' element = {<CreateAccount/>} />
          <Route path = '/login' element = {<Login/>} />
          <Route path='/verify-account' element = {<VerifyAccount/>} />
          <Route path='/career-status' element = {<CareerStatus/>} />
          <Route path='/account-type' element = {<AccountType/>} />
          <Route path='setup-profile' element = {<SetupProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
