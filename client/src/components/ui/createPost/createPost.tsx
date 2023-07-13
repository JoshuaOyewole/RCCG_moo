import createPostStyles from './_createpost.module.scss'
import profilePixs from "../../../assets/images/profilePixs.png"
import { useContext } from 'react';
import UserContext from '../../../context/userContext';

type Props = {

}

const CreatePost = (props: Props) => {
    const { } = props;

    const user = useContext(UserContext);//User Context


    const show_create_post_modal = () => {
        alert('Clciked')
    }
    return (
        <>
            <div className={createPostStyles.input_field_container}>
                {/* Profile Picture */}

                <img src={user.profilePixs} alt="Profile pixs" className={createPostStyles.post__user_pixs} />

                {/* Post Text Box */}
                <input type='button' className={createPostStyles.post__initiatePostBtn} value={`Whats on your mind, ${user.firstname} ${user.lastname}?`} onClick={show_create_post_modal} />
            </div>
            <div className="divider"></div>
        </>

    )
}

export default CreatePost