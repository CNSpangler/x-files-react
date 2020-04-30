import React from 'react';
import PropTypes from 'prop-types';

const DetailPage = ({ name = 'Who?', image = 'https://www.placecage.com/c/200/300', occupation = 'unknown', description = 'probably spooky' }) => (
  <>
    <h2>{name}</h2>
    <h3>{occupation}</h3>
    <img src={image} onError={(e)=>{e.target.src = 'https://www.placecage.com/c/200/300';}}/>
    <p>{description}</p>
  </>
);

DetailPage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DetailPage;
