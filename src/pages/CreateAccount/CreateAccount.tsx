
const CreateAccount = () => {
  return (
    <div className="create-account">
         <h1>Get started</h1>

         <input type="text" name="fullname" id="name" />
         <input type="date" name="date-of-birth" id="date-of-birth" />
         <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value= "female" >Female</option>
         </select>
         <input type="email" name="email" id="email" />
         <input type="text" name="phone-number" id="phone-number" />
         <input type="password" name="password" id="password" />
         <input type="submit" value="Create account" />

          <div>
            <p>Already signed up? <span>Log in</span></p>
          </div>

    </div>
  )
}

export default CreateAccount
