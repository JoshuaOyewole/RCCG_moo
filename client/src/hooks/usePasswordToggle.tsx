import {useState} from 'react'
import Style from "../components/form/inputFields/input/_input.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const usePasswordToggle = () => {
    const [visibility, setVisibility] = useState<Boolean>(false);
   
    const Icon = (
        <button 
            type='button' 
            onClick={()=>setVisibility(visibility =>!visibility)}
            className={Style.buttonIcon}>
            {visibility ? <FontAwesomeIcon icon={faEye} size="lg" />: <FontAwesomeIcon icon={faEyeSlash} size="lg" />}
        </button>
    )
    const InputType = visibility ? "text" : "password";

  return [InputType, Icon]
}

export default usePasswordToggle