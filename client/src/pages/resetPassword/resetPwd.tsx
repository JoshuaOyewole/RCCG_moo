import LoginStyles from "../login/_login.module.scss"
import resetPwdImg from "../../assets/images/forget_pwd.svg"
import logo from "../../assets/images/logo.png"
import { NavLink, useNavigate } from "react-router-dom"
import InputField from "../../components/form/inputFields/input/Input"
import { useState } from "react"
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"
import axios from "axios";
const env = import.meta.env;
import { toast } from "react-toastify"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../../components/header/Header"





export default function index() {
    const [loading, setLoading] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [credentials, setCredentials] = useState<{ email: string }>({
        email: "",
    })

    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading("loading");

        //Validate if a user entered a value
        if ((credentials.email.length <= 0) || (credentials.email == undefined)) toast.error("Kindly enter a Valid Email Address");


        //trim whitespace from email value entered
        const email = credentials.email.trim();

        try {
            const res = await axios.post(`${env.VITE_API_URL}/forgot_pwd`, { email });
            if (res.data) {
                setLoading("success")

                toast.success(res.data.message);
                //Redirect user to the page to enter OTP sent
                setTimeout(() => {
                    navigate('/reset-password')
                }, 5000);

            }

        } catch (error: any) {
            setLoading("error");
            toast.error(error.response.data.message);
        }
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

        <>
            <Header />
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
                    <h2 className={LoginStyles.login__instruction}>Kindly enter your Email Address to reset your password</h2>
                    <form className={LoginStyles.loginForm} onSubmit={handleSubmit}>
                        <InputField
                            type='email'
                            name="email"
                            placeholder="Email Address"
                            iconClassName={CommonInputStyles.iconRight}
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className={LoginStyles.login__btn}
                            disabled={loading === "loading" ? true : false}
                        >
                            {loading === "loading"
                                ? <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#ffffff", }} size="2xl" />
                                : "Send Reset Code"}
                        </button>
                    </form>
                </div>
            </div>
        </>

    )
}