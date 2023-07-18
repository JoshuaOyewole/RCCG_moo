import express from 'express';
import { getCountryCodes, insertCountriesInfo } from "../../controllers//countryCodes/index";

const router = express.Router();

//CREATE COUNTRY CODES
router.post('/multiple', insertCountriesInfo).get("/", getCountryCodes)

export default router;
