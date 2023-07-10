import createPostStyles from './_createpost.module.scss'
import profilePixs from "../../../assets/images/profilePixs.png"

type Props = {

}

const CreatePost = (props: Props) => {
    const { } = props;

    const show_create_post_modal = () => {
        alert('Clciked')
    }
    return (
        <>
            <div className={createPostStyles.input_field_container}>
                {/* Profile Picture */}

                <img src={profilePixs} alt="Profile pixs" className={createPostStyles.post__user_pixs} />

                {/* Post Text Box */}
                <input type='button' className={createPostStyles.post__initiatePostBtn} value='Whats on your mind, Joshua?' onClick={show_create_post_modal} />
            </div>
            <div className="divider"></div>
        </>

    )
}

export default CreatePost