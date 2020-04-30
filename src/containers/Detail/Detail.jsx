import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Character from '../../components/Character/Character.jsx';
import { fetchCharacter } from '../../services/x-files-api.jsx';

const Detail = () => {
  const [character, setCharacter] = useState([]);
  const { name } = useParams();
  
  useEffect(() => {
    fetchCharacter(name)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Header />
      <Character character={character} />
    </>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Detail;