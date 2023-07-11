import ModalStyles from "./_createpost.module.scss";
import profilePixs from "../../../assets/images/profilePixs.png"
import { faCamera, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IModalProps {
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {

    /* 
        Get Profile Picture from STORE
        const {profilePixs, userImg,username} = useSelector(state=>state.user);
    */
    const username = "Joshua M. Oyewole";
    const userImg = "/src/assets/images/profilePixs.png";


    return <div className={ModalStyles.modal__container}>
        <h4 className={ModalStyles.modal__title}>Create Post</h4>
        <div className={`divider ${ModalStyles.modal__divider}`}></div>

        <div>
            <div className={`${ModalStyles.post__post_header} mt-1`}>
                <img src={userImg} className={ModalStyles.post__user_pixs} alt={username} />
                <div className={ModalStyles.post__post_info}>
                    <p className={ModalStyles.post__user_name}>{username}</p>
                    <p>Public</p>
                </div>
            </div>
            <form className={ModalStyles.modal__post_inputField}>
                <textarea name="post_desc" id="post_desc" className={ModalStyles.modal__description}></textarea>
                <div className={`divider ${ModalStyles.modal__divider}`}></div>
                <p className={ModalStyles.modal__addPhotoText}>
                    <span>  Add to your Post</span>

                   {/*  <FontAwesomeIcon icon={faPhotoFilm} size="2xl" className={ModalStyles.modal__addPhotoIcon} /> */}
                    <input type="file" name="photos" accept="image/*" className={ModalStyles.modal__addPhotoIcon} multiple />

                </p>
                <input type="submit" value="Post" className={ModalStyles.modal__submitBtn} />
            </form>
        </div>
    </div>;
};

export default Modal;
