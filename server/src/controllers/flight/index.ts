import Flight from "../../models/flight";
import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcryptjs";
import createError from "../../util/error";

//Flight Registration
const bookFlight = async (req: Request, res: Response, next: NextFunction) => {
    console.log(res);

    try {
        let {
            flyingFrom,
            flyingTo,
            departureDate,
            arrivalDate,
            bookingDate,
            firstname,
            departureTerminal,
            arrivalTerminal,
            seatClass,
            lastname,
            bookRef
        } = req.body;

        console.log({
            flyingFrom,
            flyingTo,
            departureDate,
            arrivalDate,
            bookingDate,
            firstname,
            departureTerminal,
            arrivalTerminal,
            seatClass,
            lastname,
            bookRef
        });
        /*
        const userPhone = await Flight.findOne({ phone: req.body.phone });
         if (userPhone) return next(createError(401, "Phone Number already Exist!"));
        */

        await Flight.create({
            flyingFrom,
            flyingTo,
            departureDate,
            arrivalDate,
            bookingDate,
            firstname,
            departureTerminal,
            arrivalTerminal,
            seatClass,
            lastname,
            bookRef
        });
        res.status(200).json({
            success: true,
            message: `Successful!`
        });
    } catch (err) {
        console.log("Hello");
        
        console.log(err);
        //next(createError(400, `An Error occured! Try Again`));

    }
};
const getBookingDetails = async (req: Request, res: Response, next: NextFunction) => {
    let { bookRef, surname: lastname } = req.body;


    try {
        const bookingDetails = await Flight.findOne({
            $and: [
                { bookRef },
                { lastname }
            ]
        });

        if (!bookingDetails) return next(createError(404, "Booking code or Surname does not  Exist!"));

        res.status(200).json({
            success: true,
            data: bookingDetails
        });
    } catch (err) {
        next(createError(400, `An Error occured! Try Again`));
    }
};


export { bookFlight, getBookingDetails }
