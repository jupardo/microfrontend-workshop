import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';

import Navbar from './Navbar.jsx';

const Index = () => (
  <Navbar />
);

Index.propTypes = {
  startvalue: PropTypes.number.isRequired,
};

customElements.define('pokemon-navbar', reactToWebComponent(Index, React, ReactDOM));