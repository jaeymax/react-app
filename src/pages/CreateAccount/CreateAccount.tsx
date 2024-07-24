import Header from '../../components/Header/Header'
import './CreateAccount.css'

const CreateAccount = () => {
  return (
    <div className="create-account">
      <Header/>
      <div className="create-account-body">
        <form>
         <h1>Get started</h1>
          
          <div className="form-field">
          <label htmlFor="fullname">Full name</label>
         <input type="text" name="fullname" id="fullname" />
          </div>
          <div className="form-field">
            <label htmlFor="date-of-birth">Date of birth</label>
         <  input type="date" name="date-of-birth" id="date-of-birth" />
          </div>
          <div className="form-field">
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value= "female" >Female</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="form-field">
            <label htmlFor="phone-number">Phone number</label>
            <input type="text" name="phone-number" id="phone-number" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-field">
           
         <input type="submit" value="Create account" />
          </div>

          <div>
            <p>Already signed up? <span>Log in</span></p>
          </div>
        </form>

      </div>

    </div>
  )
}

export default CreateAccount
