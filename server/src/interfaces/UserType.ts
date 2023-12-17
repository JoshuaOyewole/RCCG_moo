import { Document } from "mongoose";

// Interface for User document
export interface UserDocument extends Document {
    username?: string;
    email: string;
    password: string;
    profilePicture?: string;
    firstname: string,
    lastname: string,
    phone: string,
    isMarried?:boolean,
    marriageAnniversary?:String,
    dob:String,
    department?: string,
    gender?:string,
}

export type birthdayMembersProps = {
    fullnames: String,
    dob: String,
    phone: String,
    email: String
}[]