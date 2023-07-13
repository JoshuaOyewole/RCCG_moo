import express from 'express';
import getUser from "../../controllers/users/index";

const router = express.Router();

//USER LOGIN
router.get('/',  getUser);

export default router;