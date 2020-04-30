import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name = 'Who?', image = 'https://www.placecage.com/c/200/300', occupation = 'unknown', description = 'unknown' }) => (
  <>
    <h2>{name}</h2>
    <img src={image} onError={(e)=>{e.target.src = 'https://www.placecage.com/c/200/300';}}/>
    <h3>{occupation}</h3>
    <p>{description}</p>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Character;
