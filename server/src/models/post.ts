import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const PostModelSchema = new Schema({
    post_description: {
        type: String,
        required: true, 
    },
    time_posted: {
        type: new Date(),
        required: true, 
    },
    photos: {
        type: File,
        required: [true, "Phone Number is required"]
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
    profilePicture: { type: String }
},
    { timestamps: true }
);

module.exports = mongoose.model('Post', PostModelSchema);