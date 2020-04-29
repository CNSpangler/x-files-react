import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title = 'X-Files Characters' }) => (
  <h1>{title}</h1>
);

Header.propTypes = {
  title: PropTypes.string
}