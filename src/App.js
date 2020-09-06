import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import PokemonList from './components/Pokemons/PokemonList';
import Pokemon from './components/Pokemons/Pokemon';

import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
