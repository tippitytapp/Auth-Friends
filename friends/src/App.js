import React from 'react';
import {Link, Route, Path} from 'react-router-dom'
import Login from './components/Login'
import FriendsList from './components/FriendsList'


import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/"><header className="App-header">
        <img src="https://fontmeme.com/permalink/200421/f11e916d60807c2c2f088aea286093ce.png" alt="friends-tv-series-font" border="0"/>
        <Link to="/login"><button>Login</button></Link>
        </header></Route>
      <Route exact path="/login"><Login/></Route>
      <Route exact path="/friends"><FriendsList /></Route>
    </div>
  );
}

export default App;
