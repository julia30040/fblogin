// @flow

import React from 'react';
import radium from 'radium';
import { Link } from 'react-router-dom';
import MouseEventHook from './MouseEventHook.jsx';

const styles = {
  name: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '400',
    margin: '0 0 16px',
    display: 'block',
    transition: 'all 0.36s ease-out',
    WebkitTransformOrigin: '0 0',
    ':hover': {
      transform: 'scale(1.5)',
    },
  },
};

function Logo() {
  return (
    <MouseEventHook isWrapText={false}>
      <Link to={'/about'}>
        <span style={styles.name}>Julia Wang</span>
    </Link>
    </MouseEventHook>
  );
}

export default radium(Logo);
