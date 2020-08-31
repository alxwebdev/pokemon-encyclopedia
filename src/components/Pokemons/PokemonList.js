import React, { useState, useEffect } from 'react';

import axios from 'axios';

import PokemonCard from './PokemonCard';

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const Pokemons = () => {
  const [data, setData] = useState([]);

  const fetchPokemon = async () => {
    const result = await axios.get(API_BASE_URL, {
      params: {
        limit: 16,
      },
    });
    setData(result.data.results);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className='container'>
      {console.log(data)}
      <div className='pokemons-grid'>
        {data.map((pokemon, index) => {
          return (
            <PokemonCard
              key={pokemon.name}
              id={index + 1}
              name={pokemon.name}
              image={`https://pokeres.bastionbot.org/images/pokemon/${
                index + 1
              }.png`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pokemons;
