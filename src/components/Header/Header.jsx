import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title = 'X-Files Characters' }) => (
  <>
    <h1>{title}</h1>
    {location !== '/' && <Link to='/'>Home</Link>}
  </>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
