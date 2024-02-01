import express from 'express';
import {sendMultipleEmails} from "../../util/data";

const router = express.Router();

//USER LOGIN
router.get('/',  sendMultipleEmails);

export default router;