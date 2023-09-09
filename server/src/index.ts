import express from "express";
const app = express();
const cron = require('node-cron');
import dotenv from "dotenv";
dotenv.config()
import cors from "cors"
import dbConnect from "./util/dbConnect";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// MIDDLEWARES IMPORT
import error from "./middleware/error";

//ROUTES IMPORTATION
import loginRoute from "./routes/auth/login";
import registerRoute from "./routes/auth/register";
import userRoute from "./routes/users/index";
import OTPRoute from "./routes/OTP/index";
import forgetPWD from "./routes/reset_pwd/forgot_pwd";
import resetPWD from "./routes/reset_pwd/reset_pwd";
import User from "./models/user";

//DB INITIALIZATION
dbConnect();
//PORT
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());

//ROUTES
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/user", userRoute);
app.use("/otp", OTPRoute);
app.use("/forgot_pwd", forgetPWD);
app.use("/reset_pwd", resetPWD);


// Set up your cron job
cron.schedule('*/9 * * * * *', async () => {
    // Reminder logic here
    try {
        //Fetch the list of all registered members in the DB
        const registeredUser =await User.find({});
        console.log(registeredUser[0].firstname);

        //Filter out those whose birthday is today(Month & Day is TODAY)
        //Send a message (pass the name of the user)

    } catch (error) {
        throw error
    }

});

//ERROR HANDLING MIDDLEWARE
app.use(error);

app.listen(PORT, () => {
    console.log(`server connected on PORT ${PORT}`);
})