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
import postRoute from "./routes/post/index";
import userRoute from "./routes/users/index";
import CountryCodeRoute from "./routes/country/index";


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
app.use("/country-codes", CountryCodeRoute);

//ERROR HANDLING MIDDLEWARE
app.use(error);

app.listen(PORT, () => {
    console.log(`server connected on PORT ${PORT}`);
})