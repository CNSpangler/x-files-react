import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import { fetchCharacter } from '../../services/x-files-api.jsx';
import DetailPage from '../../DetailPage/DetailPage.jsx';

const Detail = () => {
  const [character, setCharacter] = useState({});
  let { name } = useParams();
  
  // const match = useRouteMatch('/characters/:name');
  useEffect(() => {
    fetchCharacter(name)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Header />
      <p>{character.name}</p>
      <DetailPage character={character}/>
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
