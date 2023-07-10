import React from "react";

type btnProps = {
    btnClassName?: string,
    children: React.ReactNode,
    handleClick: (event:React.MouseEvent)=>void
}


function Button(props: btnProps) {
    const { btnClassName, handleClick, children} = props;

    return (
        <button 
        data-testid="button-component"
            className={`btn ${btnClassName ? btnClassName : ""}`} 
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button