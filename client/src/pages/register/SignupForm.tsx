import React, { useState } from "react"
import LoginStyle from "../login/_login.module.scss"
import CommonInputStyle from "../../components/form/inputFields/_common-input-styles.module.scss";
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify"
import { signupCredentialsProps } from "../../util/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const env = import.meta.env;
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const initialValue = {
    fname: "",
    lname: "",
    phone: "",
    password: "",
    email: "",
    dob: "",
    department: "",
    profilePicture: "",
    gender: '',
}

const SignupForm = () => {

    const navigate = useNavigate();
    const [dobType, setDOBType] = useState<boolean>(true)
    const [credentials, setCredentials] = useState<signupCredentialsProps>(initialValue as signupCredentialsProps);
    const [loading, setLoading] = useState<"idle" | "loading" | "success" | "error">("idle")

    const default_profile_pixs = "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1689610177~exp=1689610777~hmac=7ffde0a60b32927acefe64c0fabaa6936e30a2c4078d14d7d494cd6a16fa4b0f";


    const handleDOBField = () => setDOBType(false);//Handle DOB Input Field

    //Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials(
            (prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }
            )
        );
    }
    //Handle Select Fields
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCredentials((prevCredentials) => (
            { ...prevCredentials, [event.target.name]: event.target.value }
        ))
    }
    //Function to Handle Signup Action
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading("loading");

        if (credentials.password.length >= 6) {
            //Destructure credentials into LoginPayload
            const registerPayload = {
                gender: credentials.gender.toLowerCase(),
                firstname: credentials.fname,
                lastname: credentials.lname,
                dob: credentials.dob,
                phone: credentials.phone,
                department: credentials.department,
                password: credentials.password,
                email: credentials.email,
                profilePicture: credentials.profilePicture !== "" ? credentials.profilePicture : default_profile_pixs
            };
//`234${credentials.phone}.slice()`,
            try {
                const res = await axios.post(`${env.VITE_API_URL}/register`, (registerPayload));
                setLoading("success")
                toast.success(res.data.message);

                setTimeout(() => {
                    navigate("/login");//Assuming all things went well
                }, 2000);

            } catch (error: any) {
                setLoading("error")
                if (error.message == "Network Error") {
                    toast.error(error.message);
                }
                else {
                    toast.error(error?.response?.data?.message);
                }



            }
        }
        else {
            setLoading("error")
            toast.error("Password length must be above 6 characters")
        }
    }

    return (
        <form className={LoginStyle.SignupForm__form} autoComplete="false" onSubmit={handleSubmit}>
            <div className={LoginStyle.SignupForm__wrapper}>
                <div className={CommonInputStyle.input_field_container}>
                    <input
                        type="text"
                        name="fname"
                        placeholder="First Name"

                        value={credentials.fname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={CommonInputStyle.input_field_container} >
                    <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        value={credentials.lname}
                        onChange={handleChange}
                        required
                    />
                </div>

            </div>
            <div className={LoginStyle.SignupForm__wrapper}>
                <div className={`${CommonInputStyle.input_field_container} ${LoginStyle.SignupForm__col5}`} >
                    <div>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                            value={credentials.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <select placeholder="Gender" name="gender" required className={`${LoginStyle.SignupForm__col5} ${LoginStyle.SignupForm__select}`} onChange={handleSelect}>

                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className={LoginStyle.SignupForm__wrapper}>
                <div className={CommonInputStyle.input_field_container} >
                    <input
                        type='password'
                        name="password"
                        placeholder="Password"
                        autoComplete="false"
                        /*  icon={Icon}
                         iconClassName={CommonInputStyles.iconRight} */
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={CommonInputStyle.input_field_container} >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className={LoginStyle.SignupForm__wrapper}>
                <div className={CommonInputStyle.input_field_container} >
                    <input
                        type={dobType ? "text" : "date"}
                        name="dob"
                        onFocus={handleDOBField}
                        placeholder="Birth Day & Month"
                        /*  icon={Icon}
                         iconClassName={CommonInputStyles.iconRight} */
                        value={credentials.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={CommonInputStyle.input_field_container} >
                    <select placeholder="Are you a Worker" name="department" required className={`${LoginStyle.SignupForm__col5} ${LoginStyle.SignupForm__select}`} onChange={handleSelect}>

                        <option value="null">Select Department</option>
                        <option value="none">Not a Worker</option>
                        <option value="choir">Choir</option>
                        <option value="media">Media</option>
                    </select>
                </div>
            </div>

            <span>
                Already Registered?
                <NavLink to="/login" className={LoginStyle.fpassword}>
                    Login
                </NavLink>
            </span>
            <button
                type="submit"
                className={LoginStyle.login__btn}
                disabled={loading === "loading" ? true : false}
            >
                {loading === "loading"
                    ? <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#ffffff", }} size="2xl" />
                    : "Signup"}
            </button>
        </form>
    )
}

export default SignupForm