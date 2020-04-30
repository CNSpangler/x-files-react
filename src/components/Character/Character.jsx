import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name = 'Who?', image = 'https://www.placecage.com/c/200/300', occupation = 'unknown', description = 'unknown' }) => (
  <>
    <Link to={`characters/${name}`}> 
      <h2>{name}</h2>
      <img src={image} onError={(e)=>{e.target.src = 'https://www.placecage.com/c/200/300';}}/>
      <h3>{occupation}</h3>
      <p>{description}</p>
    </Link>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Character;
