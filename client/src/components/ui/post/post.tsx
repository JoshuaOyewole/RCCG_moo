import { useState } from "react";
import PostStyles from "../../../components/ui/createPost/_createpost.module.scss"
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";


export interface IPostProps {
    postID: string,
    username: string,
    userImg: string,
    photos?: string[],
    timeposted: string,
    post_desc: string
}
export default function Post(props: IPostProps) {
    dayjs.extend(relativeTime);

    const [toggleView, setToggleView] = useState<boolean>(true);

    const TogglePostView = (postID: string) => {
        alert(`Viewing Full Description now, ${postID}`)

    }
    return (
        <div className={PostStyles.post__post}>
            {/* Header */}
            <div className={PostStyles.post__post_header}>
                <img src={props?.userImg} className={PostStyles.post__user_pixs} alt={props?.username} />
                <div className={PostStyles.post__post_info}>
                    <p className={PostStyles.post__user_name}>{props?.username}</p>
                    <p>{dayjs(props?.timeposted).fromNow()}</p>
                </div>
            </div>
            {/* Description */}
            <span>
                <p id={props?.postID}>
                    {props?.post_desc}
                </p>
                {/*    <p onClick={() => TogglePostView(props.postID)} className={PostStyles.post__seeMoreBtn}>See more</p> */}
            </span>

            {/* Photos */}
            <div className={PostStyles.post__post_photos}>
                {
                    props.photos?.map((photo, index) => {
                        return <div className={PostStyles.post__post_photoContainer} key={index}>
                            <img src={photo} alt="Photo 1" />
                        </div>
                    })
                }

            </div>
        </div>
    );
}
