import React, { useState } from "react";
import LoginStyle from "./_login.module.scss"
import InputField from '../../components/form/inputFields/input/Input'
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"
import usePasswordToggle from "../../hooks/usePasswordToggle"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
const env = import.meta.env;

type credentialsProps = {
  phone: string,
  password: string
}


const LoginForm = () => {
  const [InputType, Icon] = usePasswordToggle();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [credentials, setCredentials] = useState<credentialsProps>({
    phone: "",
    password: ""
  })

  ///Function to Handle Login Action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading("loading");

    try {
      const res = await axios.post(`${env.VITE_API_URL}/login`, credentials);
      
      if (res.data) {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("firstname", res.data.details.firstname)
        localStorage.setItem("lastname", res.data.details.lastname)
        localStorage.setItem("profilePicture", res.data.details.profilePicture)
        localStorage.setItem("user_id", res.data.details.id)
        setLoading("success")
        navigate("/");//Assuming all things went well
      }




    } catch (error: any) {
      setLoading("error")
      if (error.message == "Network Error") {
        toast.error(error.message)
      }
      else {
        toast.error(error.response.data.message);
      }
    }
  }

  //Handle Credential State when a change Event is Fired
  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setCredentials(
      (prev) => ({
        ...prev,// 
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
        inputContainerClassName="mb-2"
        onChange={handleChange}
        required
      />
      <InputField
        type={InputType}
        name="password"
        placeholder="Password"
        icon={Icon}
        inputContainerClassName="mb-2"
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
      <button
        type="submit"
        className={LoginStyle.login__btn}
        disabled={loading === "loading" ? true : false}
      >
        {loading === "loading"
          ? <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#ffffff", }} size="2xl" />
          : "Login"}
      </button>
    </form>
  )
}

export default LoginForm