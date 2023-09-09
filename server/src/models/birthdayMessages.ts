import mongoose from "mongoose";


// Define a schema
const Schema = mongoose.Schema;

const BirthdayMessageModelSchema = new Schema<{ message: String }>(
    {
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('BirthdayMessage', BirthdayMessageModelSchema);