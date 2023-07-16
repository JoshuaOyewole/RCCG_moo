import React, { useState } from "react"
import LoginStyle from "./_login.module.scss"
import InputField from '../../components/form/inputFields/input/Input'
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"
import usePasswordToggle from "../../hooks/usePasswordToggle"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"


type credentialsProps = {
  phone: string,
  password: string
}

/* 
TODO
1. Please in a REACT TOAST to display logging and also diplay successfully logged in
You can use the promise method of React Toast
 */

const LoginForm = () => {
  const [InputType, Icon] = usePasswordToggle();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<credentialsProps>({
    phone: "",
    password: ""
  })


  ///Function to Handle Login Action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', credentials);

      localStorage.setItem("user", JSON.stringify({
        token: res.data.token,
        user: res.data.details
      }))

      navigate("/");//Assuming all things went well

    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  //Handle Credential State when a change Event is Fired
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