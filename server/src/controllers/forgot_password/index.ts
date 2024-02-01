import User from "../../models/user";
import { Request, Response, NextFunction } from 'express';
import createError from "../../util/error";
import { sendOTP, verifyOTP, deleteOTP } from "../../util/OTP";
import { hashData } from "../../util/hashData";


const forgetPWD = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let { email, name } = req.body;

    //trim off whiteSpace
    email = email.trim();

    if (!email) next(createError(400, "Email Address is required"))

    const existingUser = await User.findOne({ email });


    if (!existingUser) next(createError(400, 'Email Address provided does not Exist!'));

    const otpDetails = {
      email,
      /* subject: 'Password Reset', */
      subject: '🚀 Congratulations! Your Next Steps Await!',
      //message: "Enter the Code below to reset your Password",
      message: `
      <!DOCTYPE html>
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
                  
                    font-family: "Poppins", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size:16px;
                  }
                  .center {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align:center
                  }
                  .content {
                    padding: 2rem 1rem;
                    background-color: #f4f4f4;
                  }
                  .bg_color {
                    background-color: #3e2b55;
                    height: 5px;
                    border-top-right-radius: 0.5rem;
                    border-top-left-radius: 0.5rem;
                    margin-top: 1rem;
                  }
                  p,h3 {
                    line-height: 2rem;
                    font-size:16px;
                  }
                  li{
                    font-size:16px;
                  }
                  .small_height{
                    line-height: 1.9rem;
                  }
                </style>
              </head>
              <body>
                <div class="container" style="display: flex; justify-content: center;">
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
                      <li>Date: Thursday, 1<sup>st</sup> February 2024</li>
                      <li>Time: 7:00 pm</li>
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
                      <span style="font-style: italic;">Lead Tutor</span> <br />
                      Orisfina Bootcamp <br />
                      Hotline: 07032054367 <br />
                      Website: <a href="https://oci.com.ng">oci.com.ng</a>
                    </p>
                  </div>
                </div>
              </body>
            </html>
      `,
      duration: 1,
      name
    }

    await sendOTP(otpDetails);
    /* 
      dataEmails.map(async (data) => {
          // await sendEmail(mailOptions)
          let mailOptions = {
            from: `Orisfina Bootcamp ${AUTH_EMAIL}`,
            to: data.email,
            subject,
            html: `
          <!DOCTYPE html>
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
                      
                        font-family: "Poppins", sans-serif;
                        font-weight: 400;
                        font-style: normal;
                        font-size:20px;
                      }
                      .center {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align:center
                      }
                      .content {
                        padding: 2rem 4rem;
                        width:60vw;
                        background-color: #f4f4f4;
                      }
                      .bg_color {
                        background-color: #3e2b55;
                        height: 5px;
                        border-top-right-radius: 0.5rem;
                        border-top-left-radius: 0.5rem;
                        margin-top: 1rem;
                      }
                      p,h3 {
                        line-height: 2rem;
                        font-size:20px;
                      }
                      li{
                        font-size:20px;
                      }
                      .small_height{
                        line-height: 1.9rem;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="container" style="display: flex; justify-content: center;">
                      <div class="bg_color"></div>
                      <div class="content">
                        <h2 class="header">Dear ${data.name},</h2>
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
                          <li>Date: Thursday, 1<sup>st</sup> February 2024</li>
                          <li>Time: 7:00 pm</li>
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
                          <span style="font-style: italic;">Lead Tutor</span> <br />
                          Orisfina Bootcamp <br />
                          Hotline: 07032054367 <br />
                          Website: <a href="https://oci.com.ng">oci.com.ng</a>
                        </p>
                      </div>
                    </div>
                  </body>
                </html>
          `
          };
          await sendEmail(mailOptions)
        })
    */
    res.status(200).json({
      success: true,
      status: 200,
      message: `OTP has been successfully sent to your Email!`,
    });
  } catch (error) {
    next(createError(400, error.message))
  }
}

const resetPWD = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp, newPassword } = req.body;

    /* VALIDATIONs */
    if (!(email && otp && newPassword)) {
      return res.status(400).json('Empty Credentials are not allowed!')
    }

    const validOTP = await verifyOTP({ email, otp });

    if (!validOTP) {
      return res.status(400).json("Incorrect OTP Entered!. Try Again")
    }

    if (newPassword.length < 6) {
      return res.status(400).json("Password is too Short!")
    }

    const hashedNewPassword = hashData(newPassword);

    //Update User Record
    await User.updateOne({ email }, { password: hashedNewPassword });

    //clear any old Record
    await deleteOTP(email);

    res.status(200).json({
      success: true,
      status: 200,
      message: `Password Reset Successful!`,
    });
  }
  catch (err) {
    next(createError(400, err.message))
  }
}
export { forgetPWD, resetPWD }