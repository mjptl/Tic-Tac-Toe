import React, {useContext} from "react";
import './style.css'

const Scoreboard = ({ turn, setTurn, winner }) => {

    const selectTurn = (symbol) => {
        if (document.getElementById('box_img')){
            // Turn cannot be selected after first move is made
            // check if there is any box_img is already render in the dom
            // simply retutrn and do not change the turn
            return
        }
        // change the turn
        setTurn(symbol === 'X' ? true : false)
    }

    return (
        <div>
            <div className="main-scoreboard">
                <div className="turn-main">
                    <div className={turn ? 'turn-symbol its-my-turn': 'turn-symbol'} onClick={() => selectTurn('X')}>
                        <h1>X</h1>
                    </div>
                    <div className={!turn ? 'turn-symbol its-my-turn': 'turn-symbol'} onClick={() => selectTurn('O')}>
                        <h1>O</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard