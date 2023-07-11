import Post from "../../models/post";
import User from "../../models/user";
import { Request, Response, NextFunction } from 'express';
import createError from "../../util/error";
import { PostBody } from "interfaces/PostType";


//Post Creation Controller
const createPost = async (req: Request, res: Response, next: NextFunction) => {
    /* Add Validation later */
    try {
        const postBody: PostBody = req.body;

        //Check if the user exist in the DB
        const user = await User.findById(postBody.creator_id);

        if (user) {
            //Destructure required datas from the User 
            const { _id: id, firstname, lastname, profilePicture } = user;

            //User creating a post Object
            const creator = {
                id, name: `${firstname}  ${lastname}`, profilePicture
            }

            const Post_payload = {
                post_description: postBody.post_description,
                photos: postBody.photos,
                creator,
                time_posted: new Date()

            };
            await Post.create(Post_payload);
            res.status(200).json({
                success: true,
                message: ` Post Created Successfully successful!`
            });
        } else {
            res.status(401).json({
                success: true,
                message: ` User not Found!`
            });
        }

    } catch (err) {
        next(createError(400, `An Error occured! Try Again`));
    }
};

//GetAllPost Controller
const getAllPost = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const getter_id = req.params;
        const posts = await Post.find();


        const filteredPost = posts.filter(post => post.id !== getter_id);
        res.status(200).json({
            success: true,
            message: ` Post Created Successfully successful!`,
            data: filteredPost
        });
    } catch (error) {
        next(createError(400, `An Error occured! Try Again`));
    }
}


export default { getAllPost, createPost }