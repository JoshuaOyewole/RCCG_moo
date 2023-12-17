import mongoose from "mongoose";
import { PostType } from "interfaces/PostType";

// Define a schema
const Schema = mongoose.Schema;

const PostModelSchema = new Schema<PostType>(
    {
        post_description: {
            type: String,
            required: true,
        },
        time_posted: {
            type: String,
            required: true,
        },
        photos: [{
            type: String,
            required: [true, "Photos are required"]
        }],
        creator: {
            id: { type: String },
            name: { type: String },
            profilePicture: { type: String }
        },
    },
    { timestamps: true }
);

export default mongoose.model('Post', PostModelSchema);




/* import mongoose from "mongoose";
import { PostDocument } from "interfaces/PostType";


// Define a schema
const Schema = mongoose.Schema;

const PostSchema = new Schema<PostDocument>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    images: [{ type: String }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
        // Other comment properties...
    }],
},
    { timestamps: true }
);

export default mongoose.model('Post', PostSchema); */