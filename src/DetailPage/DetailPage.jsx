import React from 'react';
import PropTypes from 'prop-types';

const DetailPage = ({ character }) => (
  <>
    <h2>{character.name}</h2>
    <h3>{character.occupation}</h3>
    <img src={character.image} onError={(e)=>{e.target.src = 'https://www.placecage.com/c/200/300';}}/>
    <p>{character.description}</p>
  </>
);

DetailPage.propTypes = {
  character: PropTypes.object.isRequired,
};

export default DetailPage;
