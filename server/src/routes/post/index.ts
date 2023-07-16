import express from 'express';
import { getAllPost, createPost } from "../../controllers/post/index";

const router = express.Router();

//USER LOGIN
router.post('/create', createPost).get('/', getAllPost);

export default router;
