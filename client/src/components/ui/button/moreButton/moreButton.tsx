import MoreBtnStyle from "./_moreBtn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


type moreButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function MoreButton(props: moreButtonProps) {

  return (
    <td>
      <button onClick={props.handleClick} className={MoreBtnStyle["moreBtn-invertDots"]}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
    </td>
  )
}

export default MoreButton