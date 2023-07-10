import {useState} from 'react'
import Style from "../components/form/inputFields/input/_input.module.scss";

const usePasswordToggle = () => {
    const [visibility, setVisibility] = useState<Boolean>(false);
   
    const Icon = (
        <button 
            type='button' 
            onClick={()=>setVisibility(visibility =>!visibility)}
            className={Style.buttonIcon}>
            SHOW
        </button>
    )
    const InputType = visibility ? "text" : "password";

  return [InputType, Icon]
}

export default usePasswordToggle