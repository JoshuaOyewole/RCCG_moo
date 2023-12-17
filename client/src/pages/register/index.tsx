import LoginStyles from "../login/_login.module.scss"
import signupImg from "../../assets/images/slideshow1.jpg"
import logo from "../../assets/images/logo.png"
import SignupForm from "../register/SignupForm"
import { NavLink } from "react-router-dom"
import { Header } from "../../components/header/Header"


export default function index() {

  let newHeader = {
    position:"absolute"
  }
  return (

    <>
       <Header extraClass="absolute z-10" /> 
      <div className={LoginStyles.login__container}>

        {/* REGISTER IMAGE AT THE LEFT */}
        <div className={LoginStyles.login__signup_left}>


          <div className={LoginStyles.login__ImageContainer}>
          {/*   <img
              src={signupImg}
              alt="Welcome to RCCG (Mount of Olives). Kindly login below with your login details"
              className={LoginStyles.login__image}
            /> */}
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