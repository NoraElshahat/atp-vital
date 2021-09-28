import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTeam from '../src/components/team';
import AddUser from '../src/components/add-user';
import { Game } from '../src/components/game';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={AddTeam}></Route>
        <Route path="/add-player-name" component={AddUser}></Route>
        <Route path="/game" component={Game}></Route>
      </Router>
    </div>
  );
}

export default App;
