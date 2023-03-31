import React, { useState } from "react";
import './style.css'

const Form = (props) => {
    const [username, setUsername] = useState()

    const handleChanges = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        props.searchUser(username, color)
    }

    return (
        <div>
            <h3 style={{fontWeight: 400, fontSize: 20}}>Digite o usuário github:</h3>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleChanges}/>
                <button>Procurar</button>
            </form>
        </div>
    )
}

export default Form