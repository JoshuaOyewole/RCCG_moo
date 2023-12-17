import nodemailer from "nodemailer"

const sendEmailMessage = (name:string,email:string) => {
    // Create a transporter using SMTP for Gmail
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 465, // Outlook SMTP port (TLS)
        secure: true, // true for 465, false for other port
        service: 'outlook',
        auth: {
            user: 'rccgmooyouth@outlook.com', // Your Gmail address
            pass: 'redeemed2023@@' // rccgmooyouth2023@Your Gmail password or an App Password for Gmail946198
        }
    });

    // Define email message options
    const mailOptions = {
        from: 'rccgmooyouth@outlook.com', // Sender's email address
        to: email, // Recipient's email address
        subject: `Happy Birthday ${name}`, // Email subject
        text: 'This is a test email sent using Node.js and Gmail!' // Email body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

}

export {sendEmailMessage}