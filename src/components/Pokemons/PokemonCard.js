import React from 'react';

const PokemonCard = ({ id, name, image, types }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h1 className='card-id'>#{id}</h1>
        <span>
          <h1 className='card-name'>{name}</h1>
        </span>
      </div>
      <div className='card-img'>
        <img src={image} alt={name} />
      </div>
      <p>{types}</p>
    </div>
  );
};

export default PokemonCard;
