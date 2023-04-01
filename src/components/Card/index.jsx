import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import "./style.css"

const GitCard = (props) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.username}`)
        .then(response => response.json())
        .then(data => {console.log(data); setUserData(data)})
        .catch(err => console.log(err))
    }, [props.username])

    if(!userData){
        return (
            <div className="bg-card">
                <div className="card">
                    <p>Loading...</p>
                </div>
            </div>
        )
    }

    return(
        <div className="bg-card" style={{backgroundColor: props.cardColor}}>
            <div className="card">
                
                <div style={{display: "flex", gap: 10}}>
                    <img className="git-logo" src="./assets/github-icon.png" alt="" />
                    <div className="name-area">
                        <p>{userData.name}</p>
                        <span>{userData.login}</span>
                    </div>
                </div>
                
                <Avatar
                    avatar_url={userData.avatar_url}
                    cardColor={props.cardColor}
                />
                <UserInfo
                followers={userData.followers}
                following={userData.following}
                public_repos={userData.public_repos}
                company={userData.company}
                location={userData.location}
                />
                <span className="rocket-logo"><img style={{width: 28, height: 34}} src="./assets/logo.svg" alt="" /> ROCKETCARD</span>
            </div>
        </div>
    )
}

export default GitCard