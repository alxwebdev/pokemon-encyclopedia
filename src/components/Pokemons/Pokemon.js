import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = props => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState('');
  const [abilities, setAbilities] = useState('');

  const fetchSinglePokemon = async () => {
    const { pokemonIndex } = props.match.params;

    // Urls for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    // Get Pokemon Information
    const pokemonRes = await axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;
    setName(name);
    setImageUrl(imageUrl);

    const types = pokemonRes.data.types.map(type => type.type.name);
    setTypes(types);

    const abilities = pokemonRes.data.abilities.map(ability => {
      return ability.ability.name;
    });
    setAbilities(abilities);

    // Get Pokemon Description
    await axios.get(pokemonSpeciesUrl).then(res => {
      let description = '';
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === 'en') {
          description = flavor.flavor_text;
          return;
        }
      });
      setDescription(description);
    });
  };

  useEffect(() => {
    fetchSinglePokemon();
  }, []);

  return (
    <div className='container'>
      <div className='grid-details'>
        <div className='pokemon-details'>
          <h1>{name}</h1>
          <img src={imageUrl} alt={name} />
        </div>
        <div className='pokemon-details'>
          <div className='header-details'></div>
          <div className='body-details'>
            <h3>Types:</h3>
            {types.map(type => (
              <span key={type}>{type}</span>
            ))}
            <h2>Description: </h2> <h2>{description}</h2>
            <h4>Abilities: </h4>
            <h4>{abilities}</h4>
          </div>
          <div className='footer-details'></div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
