import User from "../../models/user";
import {Request, Response, NextFunction} from 'express';
import bcrypt from "bcryptjs";
import createError from "../../util/error";
import jwt from "jsonwebtoken";

//User Registration
const register = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const userPhone = await User.findOne({ phone: req.body.phone });
  
      if (userPhone) return next(createError(401, "Phone Number already Exist!"));
  
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const newUser = {
        ...req.body,
        password: hash,
      };
  
     const response = await User.create(newUser);
     res.status(200).json({
        success: true,
        message: ` Registration successful!`,
        data:{firstname:response.firstname,lastname:response.lastname}
      }); 
    } catch (err) {
      if (err.keyValue?.phone)
        return next(createError(401, `Phone already Exist!`));
  
      next(createError(400, `An Error occured! Try Again`));
    }
};

//User Login
const login = async (req: Request, res: Response, next:NextFunction) => {
    try {
      if (
        req.body.phone === (undefined || "" || " ") ||
        req.body.password === (undefined || "" || " ")
      )
        return next(createError(403, "Kindly fill the required fields"));
  
      const user = await User.findOne({ phone: req.body.phone });
  
      if (!user) return next(createError(404, "Phone Number not found!"));
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
  
      if (!isPasswordCorrect) {
        return next(createError(400, "Incorrect Password, Kindly Try Again!"));
      }
      const {phone,firstname, lastname} = user; //Destructing password from the user details recieved...
  
      const jwt_payload = {
        firstname, phone
      };
  
      const token = jwt.sign(jwt_payload, process.env.JWT_SECRET);
      /*res.cookie("access_token", token, {
          path:"/",
          sameSite:"none",
          httpOnly: false,
          expires: new Date(Date.now() + (1000*60*60*12)),//it will last for 12hrs. Try and refresh the Token after 12hrs again--> 10/08/22(12:46pm)
          maxAge: 1000 *60 * 60 *12,
          //secure: true Set to TRUE when pushing to production
        })
        .status(200)
        .json({
          "success": true,
          "status": 200,
          "message": `Logged in successfully!`,
          "details": {
            _id, isAdmin, firstname, lastname
          }
        }); */
       return res.status(200).json({
        success: true,
        status: 200,
        message: `Logged in successfully!`,
        details: {
          phone,firstname, lastname
        },
        token: token,
      }); 
    } catch (err) {
      next(err);
    }
  };

//LOGOUT
const logout = async (req: Request, res: Response, next:NextFunction) => {
    try {
      //get the token from the req
      const token = req.cookies.access_token;
  
      if (!token || token)
        return res.clearCookie("access_token").status(200).json({
          success: true,
          status: 200,
          message: `Logout successfully!`,
        });
    } catch (err) {
      next(err);
    }
  };

//const resetPwd = async (req,res,next) =>{}
export {login,register,logout} 