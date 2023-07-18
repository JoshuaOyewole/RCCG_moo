import createPostStyles from './_createpost.module.scss'
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';

type Props = {

}

const CreatePost = (props: Props) => {
    const { } = props;

    const {profilePicture,firstname,lastname} = useContext(UserContext);//User Context
   

    const show_create_post_modal = () => {
        alert('Clciked')
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