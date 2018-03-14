import React from 'react';
import About from './About.js';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/" render={ () => <GameContainer/> } />
        <Route path="/about" render={ () => <About/> } />
        <Link to="/" style={{ display: 'inline-block' }} > Game </Link> &ensp;
        <Link to="/about" style={{ display: 'inline-block' }} > About </Link>
    </div>;

export default App;
