import express from 'express';
import {register} from "../../controllers/auth";

const router = express.Router();
//USER LOGIN

router.post('/',  register);

export default router;