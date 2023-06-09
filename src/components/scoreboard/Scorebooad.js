import React, {useContext} from "react";
import './style.css'

const Scoreboard = ({ turn }) => {
    return (
        <div>
            <div className="main-scoreboard">
                <div className="turn-main">
                    <div className={turn ? 'turn-symbol its-my-turn': 'turn-symbol'}>
                        <h1>X</h1>
                    </div>
                    <div className={!turn ? 'turn-symbol its-my-turn': 'turn-symbol'}>
                        <h1>O</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard