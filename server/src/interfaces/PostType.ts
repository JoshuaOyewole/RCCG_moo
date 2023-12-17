import mongoose, { Document} from 'mongoose';
import { UserDocument } from './UserType';

// Interface for Post document
export interface PostDocument extends Document {
    user: mongoose.Types.ObjectId | UserDocument;
    text: string;
    images: string[];
    likes: Array<mongoose.Types.ObjectId | UserDocument>;
    comments: Array<{
        user: mongoose.Types.ObjectId | UserDocument;
        text: string;
        createdAt: Date;
    }>;
}


export type CreatorType = {
    id: string,
    name: string,
    phone_no: number,
    profilePicture: string
}

export interface PostType {
    post_description: string,
    time_posted: string,
    photos: Array<string>,
    creator: CreatorType
}

export type PostBody = {
    post_description: string,
    photos: string[],
    creator_id: string
}