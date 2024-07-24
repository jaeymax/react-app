import Header from '../../components/Header/Header'
import './CareerStatus.css'

const CareerStatus = () => {
  return (
    <div className='career-status'>
      <Header/>
      <div className="career-status-body">
        <div className="career-status-content">
            <h1>Where are you currently in your professional career?</h1>
            <div>
              <h5>Still in school</h5>
            </div>
            <div>
              <h5>Currently doing National Service</h5>
            </div>
            <div>
              <h5>Done with National Service</h5>
            </div>
            <div>
              <h5>
              Experienced Professional
              </h5>
            </div>
            <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default CareerStatus
