import express from 'express';
import getUser from "../../controllers/users/index";
import { verifyToken } from "../../middleware/verifyToken";

const router = express.Router();

//USER LOGIN
router.get('/', verifyToken,  getUser);

export default router;