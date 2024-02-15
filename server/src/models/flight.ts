import mongoose from "mongoose";


// Define a schema
const Schema = mongoose.Schema;

const flightModelSchema = new Schema<{ flyingFrom: String, flyingTo: String, departureDate: Date, arrivalDate: Date, bookingDate: Date, firstname: String, departureTerminal: String, arrivalTerminal: String, seatClass: String, lastname: String, bookRef: String }>(
    {
        flyingFrom: {
            type: String,
            required: true,
        },
        flyingTo: {
            type: String,
            required: true,
        },
        departureDate: {
            type: Date,
            required: true,
        },
        arrivalDate: {
            type: Date,
            required: true,
        },
        bookingDate: {
            type: Date,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        departureTerminal: {
            type: String,
        },
        arrivalTerminal: {
            type: String,
            required: true,
        },
        seatClass: {
            type: String,
        },

        lastname: {
            type: String,
            required: true,
        },
        bookRef: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model('BirthdayMessage', flightModelSchema);