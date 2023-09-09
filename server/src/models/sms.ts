import mongoose from "mongoose";
import { SMSType } from "interfaces/SMSType";

// Define a schema
const Schema = mongoose.Schema;

const SMSModelSchema = new Schema<SMSType>(
    {
        phone: {
            type: Number,
            unique: true,
        },
        message: {
            type: String,
            required: true,
        },
        name:{type: String}
    },
    { timestamps: true }
);

export default mongoose.model('SMS', SMSModelSchema);