import React from "react";
import "./style.css"

const UserInfo = (props) => {
    return(
        <div className="info-area">
            <span className="info-line">
                <img src="./assets/followers.svg" alt="" />{props.followers} Seguidores
            </span>
            <span className="info-line">
                <img src="./assets/following.svg" alt="" />{props.following} Seguindo
            </span>
            <span className="info-line">
                <img src="./assets/repository.svg" alt="" />{props.public_repos} Repositórios
            </span>
            <span className="info-line">
                <img src="./assets/company.svg" alt="" />{props.company}
            </span>
            <span className="info-line">
                <img src="./assets/location.svg" alt="" />{props.location}
            </span>
        </div>
    )
}

export default UserInfo