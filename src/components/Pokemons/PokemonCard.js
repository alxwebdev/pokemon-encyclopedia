import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState('');
  const [pokemonIndex, setPokemonIndex] = useState('');

  const fetchPokemon = () => {
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const image = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    setImage(image);
    setPokemonIndex(pokemonIndex);
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link to={`pokemon/${pokemonIndex}`}>
      <div className='card'>
        <div className='card-header'>
          <h1 className='card-id'>#{pokemonIndex}</h1>
          <span>
            <h1 className='card-name'>{name}</h1>
          </span>
        </div>
        <div className='card-img'>
          <img src={image} alt={name} />
        </div>
        <p></p>
      </div>
    </Link>
  );
};

export default PokemonCard;
