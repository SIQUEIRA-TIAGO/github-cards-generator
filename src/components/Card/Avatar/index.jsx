import React from "react";
import "./style.css"

const Avatar = (props) => {
    return (
            <img className="avatar" src={props.avatar_url} alt="" />
    )
}

export default Avatar