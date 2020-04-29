import React, { Component } from 'react';
import Header from '../../components/Header/Header.jsx';
import Characters from '../Characters/Characters.jsx';
import { fetchCharacters } from '../../services/x-files-api.jsx';

const Home = () => {
  useEffect(async () => {
    const characters = await fetchCharacters();
  });

  const [characters, setCharacters] = useState({ characters: [] });

  return (
    <>
      <Header />
      <Characters characters={characters} />
    </>
  );
};

export default Home;
