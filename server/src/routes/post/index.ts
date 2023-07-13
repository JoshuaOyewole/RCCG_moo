import express from 'express';
import {getAllPost,createPost} from "../../controllers/post/index";

const router = express.Router();

//USER LOGIN
router.post('/create',  createPost);
router.get('/:user_id',  getAllPost);

export default router;