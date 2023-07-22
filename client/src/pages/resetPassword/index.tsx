import LoginStyles from "../login/_login.module.scss"
import resetPwdImg from "../../assets/images/forget-pwd.png"
import logo from "../../assets/images/logo.png"
import {  NavLink, useNavigate } from "react-router-dom"
import InputField from "../../components/form/inputFields/input/Input"
import { useState } from "react"
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"
import { ResetPwdCredentialsProps } from "../../util/types"
import { toast } from "react-toastify"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const env = import.meta.env;
import { faSpinner } from "@fortawesome/free-solid-svg-icons"



export default function index() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [credentials, setCredentials] = useState<ResetPwdCredentialsProps>({
        password: "",
        email: "",
        otp: ""
    })




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading("loading");//Loading State

        // destructure credentials
        const { email, password, otp } = credentials;

        //Validate the Data inputed
        if (!email && !password && !otp) return toast.error("All Fields are Required!")

        try {
            const res = await axios.post(`${env.VITE_API_URL}/reset_pwd`, {
                otp, newPassword: password, email
            });

            if (res.data) {
                setLoading("success");

                toast.success(res.data.message);
                return setTimeout(() => {
                    navigate("/login")
                }, 5000);
            }
        } catch (error: any) {
            setLoading("error");
            toast.error(error.response.data);
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
                <h2 className={LoginStyles.login__instruction}>Kindly input the 4 digit OTP sent to your Email inorder to reset your Password</h2>
                <form className={LoginStyles.loginForm} onSubmit={handleSubmit}>
                    <InputField
                        type='text'
                        name="otp"
                        placeholder="Enter OTP Code"
                        iconClassName={CommonInputStyles.iconRight}
                        value={credentials.otp}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        type='password'
                        name="password"
                        placeholder="New Password"
                        iconClassName={CommonInputStyles.iconRight}
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        type='email'
                        name="email"
                        placeholder="Email address"
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
                            : "Submit"}
                    </button>
                </form>

                <span style={{ paddingTop: "2rem" }}>Return to Login Page?
                    <NavLink to="/login" className={LoginStyles.fpassword}>
                        &nbsp; Login Now
                    </NavLink>
                </span>
            </div>
        </div>
    )
}