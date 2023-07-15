import express from 'express';
import { insertCountriesInfo } from "../../controllers//countryCodes/index";

const router = express.Router();

//CREATE COUNTRY CODES
router.post('/multiple', insertCountriesInfo);

export default router;
