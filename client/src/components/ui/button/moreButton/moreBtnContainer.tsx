import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreBtnStyle from "./_moreBtn.module.scss";
import blacklistUserIcon from "../../../../assets/images/user-times.png"
import activateUserIcon from "../../../../assets/images/user-check.png"
import { useNavigate } from "react-router-dom";


type moreBtnContainerProps = {
    userID: number
}


function MoreBtnContainer(props: moreBtnContainerProps) {
    const { userID } = props;

    const navigate = useNavigate();

    const viewUserDetails = (UserID: number) => {
        navigate(`/dashboard/users/${UserID}`)
    }

    return (
        <td className={`${MoreBtnStyle["moreBtn-container"]} hide`}>
            <button onClick={() => viewUserDetails(userID)} className={MoreBtnStyle["moreBtn-btn"]}>
                <span className={MoreBtnStyle["moreBtn-icon"]}><FontAwesomeIcon icon={faEye} /></span>
                <span className={MoreBtnStyle["moreBtn-text"]}>View Details</span>
            </button>
            <button onClick={()=>alert('User successfully Blacklisted')} className={MoreBtnStyle["moreBtn-btn"]}>
                <img src={blacklistUserIcon} alt="balcklist user" className={MoreBtnStyle["moreBtn-icon"]} />
                <span className={MoreBtnStyle["moreBtn-text"]}>Blacklist User</span>
            </button>
            <button onClick={()=>alert('User activated')} className={MoreBtnStyle["moreBtn-btn"]}>
                <img src={activateUserIcon} alt="activate user" className={MoreBtnStyle["moreBtn-icon"]} />
                <span className={MoreBtnStyle["moreBtn-text"]}>Activate Use</span>
            </button>
        </td>
    )
}

export default MoreBtnContainer