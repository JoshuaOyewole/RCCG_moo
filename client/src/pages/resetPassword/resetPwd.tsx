import LoginStyles from "../login/_login.module.scss"
import resetPwdImg from "../../assets/images/forget-pwd.png"
import logo from "../../assets/images/logo.png"
import { NavLink } from "react-router-dom"
import InputField from "../../components/form/inputFields/input/Input"
import { useState } from "react"
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"


type credentialsProps = {
    phone: string,
}


export default function index() {

    const [credentials, setCredentials] = useState<credentialsProps>({
        phone: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        /* 
          1. Send the user credentials (phone & password) to the login API that will be provided
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
                        src={resetPwdImg}
                        alt="Welcome to Dixre. Kindly login below with your login details"
                        className={LoginStyles.login__image}
                    />
                </div>
            </div>

            {/* LOGIN FORM SECTION */}
            <div className={LoginStyles.login__FormContainer} >
                <h2 className={LoginStyles.login__title}>Reset Your Password</h2>
                <h2 className={LoginStyles.login__instruction}>Kindly enter your Phone Number to reset your password</h2>
                <form className={LoginStyles.loginForm} onSubmit={handleSubmit}>
                    <InputField
                        type='number'
                        name="phone"
                        placeholder="Phone Number"
                        iconClassName={CommonInputStyles.iconRight}
                        value={credentials.phone}
                        onChange={handleChange}
                        required
                    />
                    <input type="submit" value="Send Reset Code" className={LoginStyles.login__btn} />
                </form>
            </div>
        </div>
    )
}