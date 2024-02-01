import express from 'express';
import {sendMultipleEmails} from "../../util/data";
import { sendMeetingSchedule } from 'controllers/forgot_password';

const router = express.Router();

//USER LOGIN
router.get('/',  sendMultipleEmails);
router.post('/',  sendMeetingSchedule);

export default router;