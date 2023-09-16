import mongoose from "mongoose";
import { UserType } from "interfaces/UserType";

// Define a schema
const Schema = mongoose.Schema;

const UserModelSchema = new Schema<UserType>({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    },
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    },
    isMarried: {
        type: Boolean,
    },
    marriageAnniversary: {
        type: Date,
    },
    dob: {
        type: Date,
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    department: {
        type: String,
    },
    gender: {
        type: String,
        required: [true, "Kindly select a Gender"],
        enum: { values: ['male', 'female'], message: '{VALUE} is not allowed' },
    },
    password: {
        type: String,
        required: [true, "Kindly enter a valid Password"]
    },
    profilePicture: {
        type: String
    }
},
    { timestamps: true }
);

export default mongoose.model('User', UserModelSchema);