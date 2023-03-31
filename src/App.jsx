import React, {useState} from "react";
import GitCard from "./components/Card";
import "./style.css"
import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState('SIQUEIRA-TIAGO')
  const [cardColor, setCardColor] = useState('#000000')

  const searchUser = (username, color) => {
    setUsername(username)
    setCardColor(color)
  }

  return (
    <div className="container">
          <GitCard
            username={username}
            cardColor={cardColor}
          />
          <Form
            username={username}
            searchUser={searchUser}
          />
    </div>
  );
}

export default App;