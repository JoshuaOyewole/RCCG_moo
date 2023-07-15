import { EmailDetails } from "interfaces/OTPType";
import OTP from "models/OTP"
import createError from "util/error"


const generateOTP = async () => {
    let otp = `${Math.floor(1000 + Math.random() * 9000)}`
    try {
        return (otp)
    } catch (error) {
        throw error
    }
}

const sendOTP = async (otpDetails:EmailDetails) => {
    const { email,subject,message,duration } = otpDetails;

    try {
        if (!(email && subject && message)) {
            createError(402, "Kindly provide values for Email, Subject, Message")
        }

        //clear any old Record
        await OTP.deleteOne({ email });
        //Generate OTP PIN
        const generatedOTP = await generateOTP();
        return generatedOTP
        //Send Email
    } catch (error) {

    }
}


export { sendOTP, generateOTP }