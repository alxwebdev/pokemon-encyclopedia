import React from 'react';

import Navbar from './components/layout/Navbar';
import BannerTop from './components/layout/BannerTop';
import BannerBottom from './components/layout/BannerBottom';
import PokemonList from './components/Pokemons/PokemonList';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <BannerTop />
      <PokemonList />
      <BannerBottom />
    </div>
  );
};

export default App;
