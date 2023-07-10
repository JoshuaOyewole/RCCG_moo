import React, { useState } from "react"
import LoginStyle from "./_login.module.scss"
import InputField from '../../components/form/inputFields/input/Input'
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"
import usePasswordToggle from "../../hooks/usePasswordToggle"
import { NavLink, useNavigate } from "react-router-dom"


type credentialsProps = {
  phone: string,
  password: string
}

const LoginForm = () => {
  const [InputType, Icon] = usePasswordToggle();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<credentialsProps>({
    phone: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* 
      1. Send the user credentials (phone & password) to the login API that will be provided
      2. If Request is Successful, login the user to the Dixre dashboard ELSE
      3. Throw up Error
    */

    navigate("/");//Assuming all things went well

  }

  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setCredentials(
      (prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }
      )
    )
  }

  return (
    <form className={LoginStyle.loginForm} onSubmit={handleSubmit}>
      <InputField
        type="number"
        name="phone"
        placeholder="Phone Number"
        value={credentials.phone}
        onChange={handleChange}
        required
      />
      <InputField
        type={InputType}
        name="password"
        placeholder="Password"
        icon={Icon}
        iconClassName={CommonInputStyles.iconRight}
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <NavLink to="/reset-pwdLink" className={LoginStyle.fpassword}>
        forget Password?
      </NavLink>
      <br></br>
      <span>
        Not Registered?  <NavLink to="/register" className={LoginStyle.fpassword}>
          Signup Now
        </NavLink>
      </span>
      <input type="submit" value="Log in" className={LoginStyle.login__btn} />
    </form>
  )
}

export default LoginForm