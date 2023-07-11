import React, { useState } from "react"
import LoginStyle from "../login/_login.module.scss"
import InputField from '../../components/form/inputFields/input/Input'
import CommonInputStyles from "../../components/form/inputFields/_common-input-styles.module.scss"
import usePasswordToggle from "../../hooks/usePasswordToggle"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"


type credentialsProps = {
    fname: string,
    lname: string,
    phone: string,
    password: string,
    confirmPwd: string
}

const SignupForm = () => {
    const [InputType, Icon] = usePasswordToggle();
    const navigate = useNavigate();
    const [gender, setGender] = useState<String>("")

    const [credentials, setCredentials] = useState<credentialsProps>({
        fname: "",
        lname: "",
        phone: "",
        password: "",
        confirmPwd: "",
    })


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
    }
    //Function to Handle Signup Action
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (credentials.confirmPwd === credentials.password) {
            //Destructure credentials into LoginPayload
            const loginPayload = { gender:gender.toLowerCase(), firstname: credentials.fname, lastname: credentials.lname, phone: credentials.phone, password: credentials.password };
            try {
                const res = await axios.post('http://localhost:5000/register', (loginPayload));
                localStorage.setItem("token", res.data.token)
                toast.success(` ${res.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate("/login");//Assuming all things went well
                }, 2000);

            } catch (error: any) {
                toast.error(` ${error.response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
        else {
            toast.error("Password do not Match", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }
    //Handle Credential State when a change Event is Fired
    const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
        setCredentials(
            (prev) => ({
                ...prev,
                [e.target.name]: e.target.value,

            }
            )
        );


    }

    return (
        <form className={LoginStyle.SignupForm__form} onSubmit={handleSubmit}>
            <div className={LoginStyle.SignupForm__wrapper}>

                <InputField
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    inputContainerClassName={LoginStyle.SignupForm__col5}
                    value={credentials.fname}
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    inputContainerClassName={LoginStyle.SignupForm__col5}
                    value={credentials.lname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={LoginStyle.SignupForm__wrapper}>
                <InputField
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={credentials.phone}
                    inputContainerClassName={LoginStyle.SignupForm__col5}
                    onChange={handleChange}
                    required
                />

                <select placeholder="Gender" name="gender" required className={`${LoginStyle.SignupForm__col5} ${LoginStyle.SignupForm__select}`} onChange={handleSelect}>

                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className={LoginStyle.SignupForm__wrapper}>
                <InputField
                    type={InputType}
                    name="password"
                    placeholder="Password"
                    icon={Icon}
                    iconClassName={CommonInputStyles.iconRight}
                    value={credentials.password}
                    onChange={handleChange}
                    inputContainerClassName={LoginStyle.SignupForm__col5}
                    required
                />
                <InputField
                    type={InputType}
                    name="confirmPwd"
                    placeholder="Confirm Password"
                    value={credentials.confirmPwd}
                    onChange={handleChange}
                    inputContainerClassName={LoginStyle.SignupForm__col5}
                    required
                />

            </div>

            <span>
                Already Registered?
                <NavLink to="/login" className={LoginStyle.fpassword}>
                    Login
                </NavLink>
            </span>


            <input type="submit" value="Signup" className={LoginStyle.login__btn} />
        </form>
    )
}

export default SignupForm