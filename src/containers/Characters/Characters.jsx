import React from 'react';
import PropTypes from 'prop-types';
import Character from '../../components/Character/Character.jsx';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>);
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
};

export default Characters;
