//import { birthdayMembersProps } from "interfaces/UserType";
import { getDateMonth } from "./getDateMonth";
import User from "../models/user";
import sendEmail from "./sendEmail";
const { AUTH_EMAIL } = process.env;


const sendBirthdayMessages = async () => {
    let dob = getDateMonth();
    //let birthdayMembers: birthdayMembersProps = [];
    //Fetch Database for MEMBERS whose DOB falls for today
    const members = await User.find({ dob: dob });
    members.forEach((mem) => {

        let mailOptions = {
            from: AUTH_EMAIL,
            to: mem.email,
            subject: "Happy Birthday from RCCG Mount of Olive",
            html: `<h3>Hurray, Its your Birthday ${mem.firstname} ${mem.lastname}</h3>, <p>We all at RCCG Mount of Olives join the host of Angels to wish you a Happy Birthday. We wish you long life, peace and prosperity. Above all may the Lord increase you on all sides. We love you deeply and we are priviledge to celebrate with you on this special day of yours</p> <p>Happy Birthday and keep shining in God's grace and Mercies</p>`,
        }
        //Cause a little delay to avoid the SMTP throwing errors

        sendEmail(mailOptions);

    });
}
const sendAnniversaryMessages = async () => {
    let anniversary = getDateMonth();
    //let birthdayMembers: birthdayMembersProps = [];
    //Fetch Database for MEMBERS whose DOB falls for today
    const members = await User.find({ marriageAnniversary: anniversary });
    members.forEach((mem) => {

        let mailOptions = {
            from: AUTH_EMAIL,
            to: mem.email,
            subject: "Happy Wedding Anniversary from RCCG Mount of Olive",
            html: `<h3>Hurray, Its your Wedding Anniversary ${mem.firstname} ${mem.lastname}</h3>, <p>We all at RCCG Mount of Olives join the host of Angels to wish you a Happy Anniversary. We wish you long life, peace and prosperity. Above all may the Lord increase you on all sides. We love you deeply and we are priviledge to celebrate with you on this special day of yours</p> <p>Happy Wedding Anniversary and keep shining in God's grace and Mercies</p>`,
        }
        //Cause a little delay to avoid the SMTP throwing errors
        setTimeout(() => {
            sendEmail(mailOptions);
        }, 3000);

    })
}

export { sendAnniversaryMessages, sendBirthdayMessages }

//Loop through the data and extract their names, email and Phone NO into an ARRAY
//Loop through the ARRAY and call the sendEmail and sendText functions
//Inserting their details into the Message Template

//sendEmail(details);