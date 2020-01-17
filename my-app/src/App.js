import React from 'react';
import HomePage from './quizApp/HomePage';
import PlayGame from './quizApp/playGame/PlayGame';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import HighestScore from './quizApp/HighestScore';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        
        <Switch>
        
          <Route exact path ='/' component={HomePage} />
       
          <Route path ='/playgame' component= {PlayGame} />
          <Route path ='/highscore' component= {HighestScore} />
       
         
        </Switch>

      </div>
     </Router>
      
    </div>
  );
}

export default App;

      

