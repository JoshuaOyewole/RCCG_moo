import User from '../../models/user'; // Import the User model
import { UserDocument } from 'interfaces/UserType';
import nodemailer from "nodemailer"
const { AUTH_EMAIL, AUTH_PASS } = process.env;

// Function to send a birthday message to users
const sendBirthdayMessages = async (): Promise<void> => {
    try {
        // Get today's date
        const today: Date = new Date();
        const todayMonth: number = today.getMonth() + 1;
        const todayDay: number = today.getDate();

        // Find users whose birthday matches today's date
        const users = await User.find({
            $expr: {
                $and: [
                    { $eq: [{ $month: '$dob' }, todayMonth] },
                    { $eq: [{ $dayOfMonth: '$dob' }, todayDay] }
                ]
            }
        });



        // Send birthday messages to users found
        users.forEach((user: UserDocument) => {
    
            let transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                auth: {
                    user: AUTH_EMAIL,
                    pass: AUTH_PASS
                }
            })

            // Define email message options
            const mailOptions = {
                from: 'joshuaoyewole20@hotmail.com', // Sender's email address
                to: user.email, // Recipient's email address
                subject: `Hurray 🎉 Happy Birthday ${user.firstname}`, // Email subject
                text: `May your birthday be filled with the joy of the Lord! The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love, he will no longer rebuke you, but will rejoice over you with singing. We love you, but God loves you more. From RCCG Mount of Olives` // Email body
            };

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
            // Send your message logic here (e.g., using email or other messaging services)
        });
    } catch (err: any) {
        console.error('Error:', err);
    }
};

export { sendBirthdayMessages };
