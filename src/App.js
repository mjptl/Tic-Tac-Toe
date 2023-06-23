import './App.css';
import { useState } from 'react';
import Background from './components/background/Background.js';
import PlayGround from './components/playground/playground';
import Scoreboard from './components/scoreboard/Scorebooad';
import WinnerPopup from './components/winerboard/winnerboard';

function App() {

  var [turn, setTurn] = useState(true);
  var [winner, setWinner] = useState(false)

  return (
    <div className="App">
      <Background>
        <Scoreboard turn={turn} setTurn={setTurn} winner={winner}/>
        <PlayGround turn={turn} setTurn={setTurn} setWinner={setWinner}/>
        <WinnerPopup winner={winner}/>
      </Background>
    </div>
  );
}

export default App;
