import './App.css';
import { useState } from 'react';
import Background from './components/background/Background.js';
import PlayGround from './components/playground/playground';
import Scoreboard from './components/scoreboard/Scorebooad';

function App() {

  var [turn, setTurn] = useState(true);

  return (
    <div className="App">
      <Background>
        <Scoreboard turn={turn} setTurn={setTurn}/>
        <PlayGround turn={turn} setTurn={setTurn}/>
      </Background>
    </div>
  );
}

export default App;
