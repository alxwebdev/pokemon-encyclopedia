import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';

import Spinner from '../layout/Spinner';
import PokemonCard from './PokemonCard';

const fetchPokemons = async (key, offset) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=16`
  );
  return res.json();
};

const Pokemons = () => {
  const [offset, setOffset] = useState(0);

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['pokemons', offset],
    fetchPokemons
  );

  return (
    <div>
      <div className='container banner__top'>
        <h1>
          POKÉDEX &mdash;{' '}
          <span>
            Fetching Data from <a href='https://pokeapi.co/'>Pokeapi</a>
          </span>{' '}
        </h1>
      </div>

      {status === 'loading' && (
        <div>
          <Spinner />
        </div>
      )}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <div className='container'>
          <div className='pokemons-grid'>
            {resolvedData.results.map((pokemon, index) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                id={index + 1}
              />
            ))}
          </div>
          <div className='banner__bottom'>
            <button
              className='btn-danger'
              onClick={() => setOffset(offset - 16)}
            >
              Previous page
            </button>
            <button
              className='btn-primary'
              onClick={() => setOffset(offset + 16)}
            >
              Next page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemons;
