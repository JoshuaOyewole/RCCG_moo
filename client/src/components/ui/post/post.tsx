import { useState } from "react";
import PostStyles from "../../../components/ui/createPost/_createpost.module.scss"
import photo1 from "../../../assets/images/post_img1.jpg";
import photo2 from "../../../assets/images/post_img2.jpg";

export interface IPostProps {
    postID: string,
    username: string,
    userImg: string,
    timeposted: string
}
export default function Post(props: IPostProps) {
    const [toggleView, setToggleView] = useState<boolean>(true);

    const TogglePostView = (postID: string) => {
        alert(`Viewing Full Description now, ${postID}`)

    }
    return (
        <div className={PostStyles.post__post}>
            {/* Header */}
            <div className={PostStyles.post__post_header}>
                <img src={props.userImg} className={PostStyles.post__user_pixs} alt={props.username} />
                <div className={PostStyles.post__post_info}>
                    <p className={PostStyles.post__user_name}>{props.username}</p>
                    <p>{props.timeposted}</p>
                </div>
            </div>
            {/* Description */}
            <span>
                <p id={props.postID}>
                    Once upon a time, in a quaint little village, lived a young girl named Lily. She possessed a remarkable talent for painting, but her dreams were confined within the boundaries
                    {/* 
                    of her small world. Lily longed to showcase her art to the world, but fear held her back.

                     One day, a renowned art gallery announced a competition inviting artists to submit their work. Lily's heart fluttered with excitement and apprehension. With trembling hands, she gathered her courage and submitted her most cherished painting.

                    Days turned into weeks, and doubt began to cloud Lily's mind. Then, one fateful evening, a letter arrived. Her painting had been selected as the winner! Overwhelmed with joy, tears of disbelief streamed down her face.

                    Lily's artwork was exhibited in the grand gallery, captivating everyone who laid eyes on it. From that moment on, her talent was recognized and celebrated. Inspired by her journey, Lily encouraged other aspiring artists to embrace their passions and pursue their dreams.

                    And so, Lily's story became a testament to the power of perseverance, reminding us all to break free from our fears and let our talents shine brightly. 
                    */}
                </p>
                <p onClick={() => TogglePostView(props.postID)} className={PostStyles.post__seeMoreBtn}>See more</p>
            </span>

            {/* Photos */}
            <div className={PostStyles.post__post_photos}>
                <div className={PostStyles.post__post_photoContainer}>
                    <img src={photo1} alt="Photo 1" />
                </div>
                <div className={PostStyles.post__post_photoContainer}>
                    <img src={photo2} alt="photo 2" />
                </div>

            </div>
        </div>
    );
}
