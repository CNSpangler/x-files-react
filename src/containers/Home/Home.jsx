import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header.jsx';
import Characters from '../../components/Characters/Characters.jsx';
import { fetchCharacters } from '../../services/x-files-api.jsx';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters));
  });

  return (
    <>
      <Header />
      <Characters characters={characters} />
    </>
  );
};

Home.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
};

export default Home;
