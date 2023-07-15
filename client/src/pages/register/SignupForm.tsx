import React, { useState, useEffect, useRef } from "react"
import LoginStyle from "../login/_login.module.scss"
import CommonInputStyle from "../../components/form/inputFields/_common-input-styles.module.scss";
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios";
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { toast } from "react-toastify"
import { credentialsProps } from "../../util/types"

const initialValue = {
    fname: "",
    lname: "",
    phone: "",
    password: "",
    email: ""
}


const SignupForm = () => {
    const navigate = useNavigate();
    const [gender, setGender] = useState<String>("")
    const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const [credentials, setCredentials] = useState<credentialsProps>(initialValue)

/*   useEffect(() => {
    const input = document.querySelector("#phone");
    console.log(input);
    intlTelInput(input, {
        utilsScript: "path/to/utils.js"
    });  
  }, []) */
  
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
    }
    //Function to Handle Signup Action
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (credentials.password.length >= 6) {
            //Destructure credentials into LoginPayload
            const loginPayload = { gender: gender.toLowerCase(), firstname: credentials.fname, lastname: credentials.lname, phone: credentials.phone, password: credentials.password, email:credentials.email};
            try {
                const res = await axios.post('http://localhost:5000/register', (loginPayload));
                localStorage.setItem("token", res.data.token)
                toast.success(res.data.message);
                setTimeout(() => {
                    navigate("/login");//Assuming all things went well
                }, 2000);

            } catch (error: any) {
                toast.error(error.response.data.message);
            }
        }
        else {
            toast.error("Password length must be above 6 characters")
        }
    }
    //Handle Credential State when a change Event is Fired
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                <div className={CommonInputStyle.input_field_container} >
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        ref={inputRef}
                        placeholder="Phone Number"
                        value={credentials.phone}
                        onChange={handleChange}
                        required
                    />
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