import { SMSType } from "interfaces/SMSType";
//import Messages from "../models/birthdayMessages"

/* const selectRandomMessage = () => Math.floor(Math.random() * + birthdayMessages.length); */

const generateSMS = () => {

    //const allMessages = await Messages.find({});

    //const randomMessageNumber = () => Math.floor(Math.random() * + allMessages.length);

    //const randomMessge = allMessages[randomMessageNumber()];

    return "Hello RCCG Mount of Olives";

}

const sendSMS = ({ message, name, phone }: SMSType) => {
    console.log(`SMS sent to ${name} with phone number ${phone}`);
    console.log(`SMS Message is ${message}`);
}


export { sendSMS, generateSMS }