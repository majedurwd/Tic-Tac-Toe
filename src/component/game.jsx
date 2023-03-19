import React from "react";
import Board from "./board";

class Game extends React.Component {

    state = {
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true
    }

    handleClick = i => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        console.log(history)
        console.log(current)
    }

    render() {
        return (
            <div>
                <h3>Game Component</h3>
                <Board onClick={ this.handleClick } squares={this.state.history[0]} />
            </div>
        )

    }
}

export default Game