import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config()
import cors from "cors"
import dbConnect from "./util/dbConnect";
import cookieParser from "cookie-parser";
import RateLimit from "express-rate-limit"
import bodyParser from "body-parser";

// MIDDLEWARES IMPORT
import error from "./middleware/error";

//ROUTES IMPORTATION
import loginRoute from "./routes/auth/login";
import registerRoute from "./routes/auth/register";


//DB INITIALIZATION
dbConnect();
//PORT
const PORT = process.env.PORT;


// Set up rate limiter: maximum of twenty requests per minute
const limiter = RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

app.use(bodyParser.json())
app.use(cors());
app.use(cookieParser());

//ROUTES
app.use("/login", loginRoute);
app.use("/register", registerRoute);

//ERROR HANDLING MIDDLEWARE
app.use(error);

/* console.log("Error is ===>", process.env.MONGO_URL); */


app.listen(PORT, () => {
    console.log(`server connected on PORT ${PORT}`);
})

