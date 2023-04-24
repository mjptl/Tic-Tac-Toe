import './App.css';
import Background from './components/background/Background.js';
import PlayGround from './components/playground/playground';
import Scoreboard from './components/scoreboard/Scorebooad';

function App() {
  return (
    <div className="App">
      <Background>
        <Scoreboard/>
        <PlayGround/>
      </Background>
    </div>
  );
}

export default App;
