import { Request, Response, NextFunction } from 'express';
import User from "../../models/user";



//Fetech User Details
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    /* 
         1. Get the Token sent via the Request
         2. Deny the Requester if no Token
         3. destructure the Token and get the user ID
         4. use the user ID to fetch the user details and
         5. send the details (firstname, lastname, phone no, profile picture) as res 
     */

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export default getUser ;