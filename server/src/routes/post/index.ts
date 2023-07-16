import express from 'express';
import { getAllPost, createPost } from "../../controllers/post/index";
import {verifyToken} from "../../middleware/verifyToken";

const router = express.Router();

//USER LOGIN
router.post('/create', verifyToken, createPost).get('/',verifyToken, getAllPost);

export default router;
