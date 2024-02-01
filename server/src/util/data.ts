// Array of objects with usernames and emails
export const dataEmails = [
  { email: "joshuaoyewole20@gmail.com", name: "Joshua Oyewole" },
  { email: "joshpp2013@gmail.com", name: "Joshua Oyewole" },
  /* { email: "ajayiaustine5@gmail.com", name: "Ajayi Austine" }, */
  { email: "godwinpraise05@gmail.com", name: "Praise Godwin" },
  { email: "checkoutmd@gmail.com", name: "Donald Ogioben" },
  { email: "Vonnecrux@gmail.com", name: "Daniel Irene" },
  { email: "austinaikhomu1@gmail.com", name: "Augustine Ogie" },
  { email: "Desmondchideraexcel@gmail.com", name: "Desmond Chidera Excel" },
  { email: "mariacynny@gmail.com", name: "Cynthia Bube" },
  { email: "dalrexxy@gmail.com", name: "David David" },
  { email: "christiannzebunachi@gmail.com", name: "Christian Nzebunachi" },
  { email: "bukarharuna@gmail.com", name: "Bukar Haruna Haruna" },
  { email: "greg.ethel@gmail.com", name: "Greg Odi" },
  { email: "onwelimadunwamaka@yahoo.com", name: "Nwamaka Onwelimadu" },
  { email: "sofiyulahiakanbi@gmail.com", name: "Sofiyulahi Akanbi" },
  { email: "charlieaigbovbiosa03@gmail.com", name: "Charlie Aigbovbiosa" },
  { email: "quadrioriyomi5050@gmail.com", name: "Babawale Quadri" },
  { email: "ademolaayomide019@gmail.com", name: "Ademola Idris" },
  { email: "dennisayuba114@gmail.com", name: "Dennis Ayuba" },
  { email: "Abdulrahmanmuhammad00123@gmail.com", name: "Abdulrahman Muhammad" },
  { email: "oziomaonyero98@gmail.com", name: "Ozioma Onyero" },
  { email: "vjmeribe@gmail.com", name: "vįctør" },
  { email: "auwalgarbaabubakar95@gmail.com", name: "Auwal Garba Abubakar" },
  { email: "chimdindusmart@gmail.com", name: "Ike chimdindu david" },
  { email: "mattykaykay405@gmail.com", name: "Matthew Abayomi" },
  { email: "awasiu001@gmail.com", name: "Mukaila Wasiu" },
  { email: "samuelfamakinwa973@gmail.com", name: "Samuel Famakinwa" },
  { email: "datalinkscomputer@gmail.com", name: "Abubakar Danladi Musa" },
  { email: "oyeshiletosin17@gmail.com", name: "Abdullah Oyeshile" },
  { email: "babawalequadri2019@gmail.com", name: "Yomi Babs" },
  { email: "ademolaayomide019@gmail.com", name: "Ademola Ayomide" },
  { email: "iadamu461@gmail.com", name: "Adams Whales" },
  { email: "learnwebdesign.1.0@gmail.com", name: "Solomon Elijah" },
  { email: "peterchukwuemekaeneteh1977@gmail.com", name: "Peter Eneteh" },
  { email: "dosucasmil93@gmail.com", name: "Dosu Casmil Minflinmawu" },
  { email: "adeoludavid1@gmail.com", name: "Adejimi Adeolu David" },
  
];
import { Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';
import Bottleneck from 'bottleneck';

// Replace with your email credentials and settings
const { AUTH_EMAIL, AUTH_PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS
  }
})

//Test Transporter
transporter.verify((error, success) => {
  if (!success) {
    console.log(error);
  }
})

const sendMultipleEmails = (req: Request, res: Response, next: NextFunction ) => {


  // Create a limiter to avoid overloading the server
  const limiter = new Bottleneck({
    maxConcurrent: 1, // Adjust as needed
    minTime: 1000, // Minimum time to wait between requests in milliseconds
  });

  // Function to send emails
  const sendEmail = async (user: { name: string; email: string; }) => {
    const mailOptions = {
      from: `Orisfina Bootcamp ${AUTH_EMAIL}`,
      to: user.email,
      subject: '🚀 Congratulations! Your Next Steps Await!',
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
                    <h2 class="header">Dear ${user.name},</h2>
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

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${user.email}`);
    } catch (error) {
      console.error(`Error sending email to ${user.email}: ${error}`);
    }
  };

  // Loop through the array of users and send emails with rate limiting
  dataEmails.forEach((user) => {
    limiter.schedule(() => sendEmail(user));
  });
  res.status(200).json({
    success: true,
    status: 200,
    message: `Emails has been successfully!`,
});
}


export { sendMultipleEmails }