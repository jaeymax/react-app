import Navbar from "../../components/Navbar/Navbar"
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <header>
         <div>
          <div className="students" >
            <p>For Students & Graduates</p>
          </div>
          <div className="partners" >
             <p>For Partners</p>
          </div>
         </div>
      </header>
         <Navbar/>
      <div className="body-container">
        <div className="body-content" >
          <h1>Discover a greater you</h1>
          <h2>We help you <span>find perfect job.</span></h2>
          <div className="input-container">
          <input type="text" name="search" id="search" placeholder="Try Civil Engineer" />
          <input type="text" name="jobs" id="jobs" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
