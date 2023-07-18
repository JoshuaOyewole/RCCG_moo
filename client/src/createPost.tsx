import createPostStyles from './_createpost.module.scss'
import { getUserDatas } from './util/auth';

type Props = {}

const CreatePost = (props: Props) => {
    const { } = props;

    const { profilePicture, firstname, lastname } = getUserDatas();//User Context

    const show_create_post_modal = () => {
        //to be added 
    }
    return (
        <>
            <div className={createPostStyles.input_field_container}>
                {/* Profile Picture */}

                <img src={profilePicture ? profilePicture : ""} alt="Profile pixs" className={createPostStyles.post__user_pixs} />

                {/* Post Text Box */}
                <input type='button' className={createPostStyles.post__initiatePostBtn} value={`Whats on your mind, ${firstname} ${lastname}?`} onClick={show_create_post_modal} />
            </div>
            <div className="divider"></div>
        </>

    )
}

export default CreatePost