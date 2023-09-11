import LoginStyles from "./_login.module.scss"
import loginImg from "../../assets/images/Mobile login-bro.svg"
import LoginForm from "./LoginForm"
import { Header } from "../../components/header/Header"


export default function index() {
  return (
    <>
      <Header />
      <div className={LoginStyles.login__container}>
        {/* LOGIN IMAGE AT THE LEFT */}
        <div className={LoginStyles.login__left}>


          <div className={LoginStyles.login__ImageContainer}>
            <img
              src={loginImg}
              alt="Welcome to Mount of Olive. Kindly login below with your login details"
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
    </>

  )
}