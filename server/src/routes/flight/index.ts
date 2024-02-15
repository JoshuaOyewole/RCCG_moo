import express from 'express';
import {bookFlight,getBookingDetails} from "../../controllers/flight/index";

const router = express.Router();

//FLIGHT
router.post('/book',  bookFlight);
router.post('/',  getBookingDetails);

export default router;