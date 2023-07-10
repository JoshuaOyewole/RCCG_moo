import LoginStyles from "../login/_login.module.scss"
import loginImg from "../../assets/images/pablo-sign-in.png"
import logo from "../../assets/images/logo.png"
import LoginForm from "../login/LoginForm"
import { NavLink } from "react-router-dom"
import InputField from "../../components/form/inputFields/input/Input"
import { useState } from "react"
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"


type credentialsProps = {
    pwd: string,
    confirmPwd: string
}


export default function index() {

    const [credentials, setCredentials] = useState<credentialsProps>({
        pwd: "",
        confirmPwd: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        /* 
          1. Send the user credentials (email & password) to the login API that will be provided
          2. If Request is Successful, login the user to the Dixre dashboard ELSE
          3. Throw up Error
        */
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
                <h2 className={LoginStyles.login__title}>Reset Your Password</h2>
                <h2 className={LoginStyles.login__instruction}>Please note that your password is case sensitive and must be at least 6 characters long</h2>
                <form className={LoginStyles.loginForm} onSubmit={handleSubmit}>
                    <InputField
                        type='password'
                        name="pwd"
                        placeholder="New Password"
                        iconClassName={CommonInputStyles.iconRight}
                        value={credentials.pwd}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        type='password'
                        name="confirmPwd"
                        placeholder="Confirm Password"
                        iconClassName={CommonInputStyles.iconRight}
                        value={credentials.confirmPwd}
                        onChange={handleChange}
                        required
                    />
                    <input type="submit" value="Submit" className={LoginStyles.login__btn} />
                </form>
            </div>
        </div>
    )
}