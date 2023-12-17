import ModalStyles from "./_createpost.module.scss";
import {
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";
import { storage } from "../../../config/firebaseConfig";
import { faPhotoFilm, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { v4 } from "uuid";
const env = import.meta.env;
import axios from "axios";
import { toast } from "react-toastify";
import { getUserDatas } from "../../../util/auth";



interface IModalProps {
}

const Modal = ({ }: IModalProps) => {
    const [loading, setLoading] = useState<"idle" | "loading" | "success" | "error">("idle");
    const { firstname, token, lastname, profilePicture, user_id: creator_id } = getUserDatas();//Fetches User details (name,profile pixs)
    const [imageUpload, setImageUpload] = useState<FileList | null>({} as FileList);
    const [postDesc, setPostDesc] = useState<string>('');


    //Clear Post Fields
    const clearFields = () => {
        setPostDesc("");
        setImageUpload(null)
    }

    //Handle File Input
    const onchange = (event: React.ChangeEvent<HTMLInputElement>) => setImageUpload(event.target.files)

    //Handle Uploading of Post
    const uploadPost = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading("loading");

        if (!imageUpload) {
            setLoading("error");
            return;
        }
        let postURLs: string[] = [];

        //Check if the image selected is NOT LESS THAN 2 or GREATER THAN 6
        if (postDesc !== "") {
            try {
                //Loop through FileList and upload each image to the Firebase Bucket
                for (let index = 0; index < imageUpload.length; index++) {
                    const blob = imageUpload[index];
                    const imageRef = ref(storage, `images/${imageUpload[index].name + v4()}`);

                    const snapshot = await uploadBytes(imageRef, blob);
                    const url = await getDownloadURL(snapshot.ref)
                    postURLs.push(url)
                }
                const payload = {
                    creator_id,
                    post_description: postDesc,
                    photos: postURLs
                };

                const response = await axios.post(`${env.VITE_API_URL}/post/create`, payload, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data) {
                    /* CLEAR INPUT FIELDS and display a Success Message */
                    clearFields();
                    setLoading("success");
                    toast.success(response.data.message);
                }

            } catch (error) {
                setLoading("error");
                toast.error('An Error Occured while Uploading  your Post');
            }
        }
        else {
            setLoading("error");
            toast.error('Photos must be Greater than 2 and less than 6')
        }

    }



    return <div className={ModalStyles.modal__container}>
        <h4 className={ModalStyles.modal__title}>Create Post</h4>
        <div className={`divider ${ModalStyles.modal__divider}`}></div>

        <div>
            <div className={`${ModalStyles.post__post_header} mt-1`}>
                <img src={profilePicture ? profilePicture : ""} className={ModalStyles.post__user_pixs} alt={firstname ? firstname : ""} />
                <div className={ModalStyles.post__post_info}>
                    <p className={ModalStyles.post__user_name}>{firstname} {lastname}</p>
                    <p>Public</p>
                </div>
            </div>
            <form className={ModalStyles.modal__post_inputField} onSubmit={uploadPost}>
                <textarea name="post_desc" id="post_desc" className={ModalStyles.modal__description} value={postDesc} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPostDesc(e.target.value)} required placeholder={`Whats on your mind ${firstname}?`}></textarea>
                <div className={`divider ${ModalStyles.modal__divider}`}></div>
                <p className={ModalStyles.modal__addPhotoText}>
                    <span>  Add to your Post</span>

                    <FontAwesomeIcon icon={faPhotoFilm} size="2xl" className={ModalStyles.modal__addPhotoIcon} />
                    <input type="file" name="photo" id="photo" multiple onChange={onchange} accept="image/png, image/jpeg" className={ModalStyles.modal__addPhotoIcon} />

                </p>
                <button type="submit" className={ModalStyles.modal__submitBtn}>
                    {loading === "loading" ? <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#ffffff", }} size="2xl" /> : "Post"}
                </button>
            </form>
        </div>
    </div>;
};

export default Modal;