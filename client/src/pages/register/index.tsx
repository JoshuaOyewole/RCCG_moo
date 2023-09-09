import LoginStyles from "../login/_login.module.scss"
import signupImg from "../../assets/images/register.svg"
import logo from "../../assets/images/logo.png"
import SignupForm from "../register/SignupForm"
import { NavLink } from "react-router-dom"
import { Header } from "../../components/header/Header"


export default function index() {
  return (

    <>
      <Header />
      <div className={LoginStyles.login__container}>

        {/* REGISTER IMAGE AT THE LEFT */}
        <div className={LoginStyles.login__left}>
          <NavLink to="/" className="logoCont">
            <img src={logo} className={LoginStyles.logo} alt='RCCG MOO Logo' />
          </NavLink>


          <div className={LoginStyles.login__ImageContainer}>
            <img
              src={signupImg}
              alt="Welcome to RCCG (Mount of Olives). Kindly login below with your login details"
              className={LoginStyles.login__image}
            />
          </div>
        </div>

        {/* SIGNUP FORM SECTION */}
        <div className={LoginStyles.login__signupContainer} >
          <h2 className={LoginStyles.login__title}>We are thrilled to have you!</h2>
          <h2 className={LoginStyles.login__instruction}>Kindly fill the form correctly to get Started.</h2>
          <SignupForm />
        </div>
      </div>
    </>

  )
}