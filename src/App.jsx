import React from "react";
import "./App.css"

import Game from "./component/game";


const App = () => {
    return (
        <div className="app">
            <h2>Tic-Tac-Toe</h2>
            <Game/>
        </div>
    )
}

export default App