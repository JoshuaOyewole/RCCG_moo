import { Request, Response, NextFunction } from 'express';
import { generateSMS, sendSMS } from "../../util/sendSMS";
import sms from 'models/sms';
import createError from 'util/error';
import { SMSType } from 'interfaces/SMSType';

const deleteSMS = async (req: Request, res: Response, next: NextFunction) => {
    const {phone} = req.body;
    try {
        //delete a Previous sent birthday Message
        await sms.deleteOne({ phone });
        res.status(200).json('Message successfully deleted');
    } catch (error) {
        throw error;
    }
}

const sendMessage = async (SMSDetails: SMSType) => {
    const { phone,name } = SMSDetails;

    if (!(phone && name)) {
        return createError(402, "Kindly provide Birthday Message or Phone Number")
    }
    try {

        //Generate SMS PIN
        // const generatedSMS = Math.floor(1000 + Math.random() * +9000);
        const message = await generateSMS();


        //Send SMS
        const SMSOptions = {
            phone,
            message,
            name
        }

      
        await sendSMS(SMSOptions);

        const createdSMSRecord = await sms.create(SMSOptions);
        return createdSMSRecord;

    } catch (error) {
        throw error
    }
}
export { deleteSMS,sendMessage };


/* 2 FUNCTIONS

1. the one to generate SMS
2. the one to sendSMS  (takes in the message and name of who you are sending to)

*/