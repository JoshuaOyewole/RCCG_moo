import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    },
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    },
    phone: {
        type: Number,
        required: [true, "Phone Number is required"]
    },
    nationality: {
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