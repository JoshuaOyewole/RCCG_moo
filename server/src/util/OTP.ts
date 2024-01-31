import { mailOptionsType, verifyOTPCredentialsType } from "interfaces/OTPType";
import OTP from "../models/OTP"
import createError from "../util/error"
import sendEmail from "../util/sendEmail";
import { verifyHashedData, hashData } from "./hashData";



const { AUTH_EMAIL } = process.env;

const generateOTP = () => Math.floor(1000 + Math.random() * +9000);

const deleteOTP = async (email: string) => {
    try {
        //clear any old Record
        await OTP.deleteOne({ email });
    } catch (error) {
        throw error;
    }
}
const sendOTP = async (otpDetails: mailOptionsType) => {
    const { email, subject, message, duration,name } = otpDetails;

    if (!(email && subject && message)) {
        return createError(402, "Kindly provide values for Email, Subject, Message")
    }
    try {

        //clear any old Record
        await deleteOTP(email);

        //Generate OTP PIN
        // const generatedOTP = Math.floor(1000 + Math.random() * +9000);
        const generatedOTP = generateOTP();


        //Send Email
        const mailOptions = {
            from: AUTH_EMAIL,
            to: email,
            subject,
            html: `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                  rel="stylesheet"
                />
                <title>Email</title>
                <style>
                  body {
                    background-color: #eee6e6;
                    font-family: "Poppins", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                  }
                  .container {
                    width: 50vw;
                  }
                  .center {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  .content {
                    background-color: #fff;
                    padding: 2rem 4rem;
                  }
                  .bg_color {
                    background-color: #3e2b55;
                    height: 10px;
                    border-top-right-radius: 0.5rem;
                    border-top-left-radius: 0.5rem;
                    margin-top: 1rem;
                  }
                  p {
                    line-height: 2rem;
                  }
                  .small_height{
                    line-height: 1.5rem;
                  }
                </style>
              </head>
              <body class="center">
                <div class="container">
                  <div class="center">
                    <img
                      src="https://i.ibb.co/2j4t8mK/oci-logo.png"
                      alt="orisfina Bootcamp"
                      class="center"
                    />
                  </div>
            
                  <div class="bg_color"></div>
                  <div class="content">
                    <h2 class="header">Dear ${name},</h2>
                    <p>
                      We're thrilled that you've expressed interest in our Web Development
                      Course, and we can't wait to embark on this coding journey with you!
                    </p>
                    <h3>🚀 Web Development Course Overview:</h3>
                    <p>
                      Our comprehensive course is designed to equip you with in-demand
                      skills and kickstart your journey in web development. From building
                      responsive websites to mastering coding languages, we cover it all!
                    </p>
                    <p>Your first class kick start shortly,</p>
                    <h3>📅 First Session Details:</h3>
                    <ul>
                      <li>Date: Thursday, 1st February 2024</li>
                      <li>Morning Session: 10:00am</li>
                      <li>Evening Session: 7:00 pm</li>
                    </ul>
                    <h3>🌟 Why Join Us?</h3>
                    <ul>
                      <li>Exliert-led sessions</li>
                      <li>Practical hands-on projects</li>
                      <li>Interactive learning environment</li>
                      <li>
                        Networking opportunities with our partners after your training
                      </li>
                    </ul>
                    <h3>📧 Next Steps:</h3>
                    <p>
                      Look out for an email with further details on the curriculum,
                      materials, and how to prepare for the first session.
                    </p>
                    <p>
                      We're excited to have you on board! If you have any questions or need
                      assistance, feel free to reply to this email.
                    </p>
                    <p><b> Best regards,</b></p>
                    <p class="small_height">
                      Joshua Oyewole <br />
                      Lead Tutor <br />
                      Orisfina Bootcamp 07032054367 <br />
                      Website: <a href="https://oci.com.ng">oci.com.ng</a>
                    </p>
                  </div>
                </div>
              </body>
            </html>
            `
            /*  html: `<p> ${message} </p><p style="color:tomato; font-size:25px; letter-sapcing:2px;"><b>${generatedOTP}</b></p><p> This code <b>expires in ${duration} hour(s)</b>.</p>`, */
        }
        await sendEmail(mailOptions)

        //save OTP Record
        const hashOTP = hashData(generatedOTP.toString())
        /*  const salt = bcrypt.genSaltSync(10);
         const hashOTP = bcrypt.hashSync(generatedOTP.toString(), salt); */

        const newOTP = {
            email,
            otp: hashOTP,
            expiresAt: Date.now() + 3600000 * +duration
        }

        const createdOTPRecord = await OTP.create(newOTP);
        return createdOTPRecord;

    } catch (error) {
        throw error
    }
}

const verifyOTP = async (OTPCredentials: verifyOTPCredentialsType) => {
    const { email, otp } = OTPCredentials;

    try {
        if (!email && otp) {
            throw Error("Kindly provide Email or OTP Values")
        }

        const matchedOTPRecord = await OTP.findOne({ email });

        if (!matchedOTPRecord) {
            throw Error("No OTP Records Found")
        }

        const { expiresAt } = matchedOTPRecord;

        //Checking for Expired OTP Code
        //const currentTime = new Date();

        if (expiresAt < (new Date())) {
            await OTP.deleteOne({ email });

            throw Error("OTP Code has expired. Kindly request for a new One.")
        }

        //Not yet Expire
        const hashedOTP = matchedOTPRecord.otp;
        const validOTP = verifyHashedData(otp, hashedOTP);

        return validOTP;

    } catch (error) {
        throw error
    }

}


export { sendOTP, generateOTP, verifyOTP, deleteOTP }