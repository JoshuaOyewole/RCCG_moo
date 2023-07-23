import Post from "../../models/post";
import User from "../../models/user";
import { Request, Response, NextFunction } from 'express';
import createError from "../../util/error";
import { PostBody } from "interfaces/PostType";


//Post Creation Controller
const createPost = async (req: Request, res: Response, next: NextFunction) => {

    const { creator_id, post_description, photos } = req.body;

    //Validation later 
    if (creator_id && post_description && photos !== null || undefined) {
        try {
            const postBody: PostBody = req.body;

            //Check if the user exist in the DB
            const user = await User.findById(postBody.creator_id);//Overtime the creator ID will be gotten from the req.user

            if (user) {
                //Destructure required datas from the User 
                const { _id: id, firstname, lastname, profilePicture } = user;


                //User creating a post Object
                const creator = {
                    id, name: `${firstname} ${lastname}`, profilePicture
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
                    message: ` Post Created Successfully`
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
    }
    else {
        res.status(400).json({
            success: true,
            message: `Kindly fill all Fields`
        });
    }
};

//GetAllPost Controller
const getAllPost = async (req: Request, res: Response, next: NextFunction) => {
    const { user_id } = req.query;
    const page: number = parseInt(req.query.page as string) || 1;//Current page requesting data for
    const limit: number = parseInt(req.query.limit as string) || 10;//(limit) Define the number of items per page

    try {
        // Calculate the skip value to determine the starting index of the pagination
        const skip = (page - 1) * limit;

        if (user_id !== undefined || "") {
            // Fetch the post with pagination
            const posts = await Post.find().skip(skip).limit(limit).exec();

            //Check if there is a post in the DB
            if (posts.length >= 1) {
                const filteredPost = posts.filter(post => post.creator.id !== user_id);//filter out current user post
                // Fetch the total count of Posts (for calculating total pages)
                const totalPostCount = await Post.countDocuments().exec();
                // Calculate the total number of pages based on the total count and items per page
                const totalPages:number = Math.ceil(totalPostCount / limit);
                res.status(200).json({ filteredPost, totalPages });
            }
            else {
                res.status(201).json({
                    success: true,
                    message: ` No Post Available `,
                });
            }

        }
        else {
            res.status(400).json({
                success: true,
                message: ` Kindly pass a User ID`,
            });
        }
    }
    catch (error) {
        next(createError(400, `An Error occured! Try Again`));
    }
}


export { getAllPost, createPost }