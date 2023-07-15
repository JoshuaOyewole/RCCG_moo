import LoginStyles from "./_login.module.scss"
import loginImg from "../../assets/images/login.png"
import logo from "../../assets/images/logo.png"
import LoginForm from "./LoginForm"
import { NavLink } from "react-router-dom"


export default function index() {
  return (
    <div className={LoginStyles.login__container}>

      {/* LOGIN IMAGE AT THE LEFT */}
      <div className={LoginStyles.login__left}>
        <NavLink to="/" className="logoCont">
          <img src={logo} className={LoginStyles.logo} alt='Dixre Logo' />
        </NavLink>


        <div className={LoginStyles.login__ImageContainer}>
          <img
            src={loginImg}
            alt="Welcome to Dixre. Kindly login below with your login details"
            className={LoginStyles.login__image}
          />
        </div>
      </div>

      {/* LOGIN FORM SECTION */}
      <div className={LoginStyles.login__FormContainer} >
        <h2 className={LoginStyles.login__title}>Welcome Back!</h2>
        <h2 className={LoginStyles.login__instruction}>Kindly enter your login details to continue</h2>
        <LoginForm />
      </div>
    </div>
  )
}