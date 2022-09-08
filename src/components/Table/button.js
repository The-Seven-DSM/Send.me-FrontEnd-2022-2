import React, {useState}from "react";

function Button(){
    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? 'V': '';

    return(
        <button 
        id={`status${toggleClassCheck}`}
        onClick={handleClick}
        ></button>
    )
}
export default Button