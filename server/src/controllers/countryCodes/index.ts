import Country from "../../models/countryCode";
import { Request, Response, NextFunction } from 'express';
import createError from "../../util/error";
import { CountryType } from "interfaces/CountryType";


//Country Codes Creation Controller
const insertCountriesInfo = async (req: Request, res: Response, next: NextFunction) => {

    const payload: CountryType[] = req.body;
    //Validation
    if (payload == undefined || null) {
        res.status(404).json({
            success: false,
            message: `Kindly fill all Fields`
        });
    }

    else {

        try {

            await Country.create(payload);
            res.status(200).json({
                success: true,
                message: `Data Successfully added`
            });
        } catch (error) {
            console.log(error);

            next(createError(400, `An Error occured! Try Again`));
        }

    }

}

const getCountryCodes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countrycodes = await Country.find();
        res.status(200).json(countrycodes);
    } catch (error) {
        next(createError(400, `An Error occured! Try Again`));
    }

}

export { insertCountriesInfo, getCountryCodes };