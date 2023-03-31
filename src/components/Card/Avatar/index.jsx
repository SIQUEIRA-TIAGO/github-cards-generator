import React from "react";
import "./style.css"

const Avatar = (props) => {
    return (
            <img style={{borderColor: props.cardColor}} className="avatar" src={props.avatar_url} alt="" />
    )
}

export default Avatar