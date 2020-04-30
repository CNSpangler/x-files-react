import React, { useState, useEffect } from 'react';
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

export default Home;
