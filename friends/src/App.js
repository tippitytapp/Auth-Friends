import React from 'react';
import {Link, Route, Path} from 'react-router-dom'
import Login from '../src/components/Login'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://fontmeme.com/permalink/200421/f11e916d60807c2c2f088aea286093ce.png" alt="friends-tv-series-font" border="0"/>
      </header>
      <Login />
    </div>
  );
}

export default App;
