import express from "express";
const app = express();
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
import postRoute from "./routes/post/index";
import forgetPWD from "./routes/reset_pwd/forgot_pwd";
import resetPWD from "./routes/reset_pwd/reset_pwd";
import sendMeetingSchedule from "./routes/sendMultipleEmails/index";
import flight from "./routes/flight/index";

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
app.use("/post", postRoute);
app.use("/user", userRoute);
//app.use("/otp", OTPRoute);
app.use("/forgot_pwd", forgetPWD);
//app.use("/meeting_link", sendMeetingSchedule);
app.use("/reset_pwd", resetPWD);
app.use("/flight", flight);

//BIRTHDAY SCHEDULER
require('./controllers/BirthdayMessage/scheduler');

//ERROR HANDLING MIDDLEWARE
app.use(error);

app.listen(PORT, () => {
    console.log(`server connected on PORT ${PORT}`);
})
