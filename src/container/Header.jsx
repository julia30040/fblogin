// @flow
import React, { Component } from 'react';
import LineEffectLink from '../component/Element/LineEffectLink.jsx';
import Logo from '../component/Element/Logo.jsx';

const styles = {
  wrapper: {
    position: 'absolute',
    top: 32,
    left: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    zIndex: 5,
  },
};

class Header extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <Logo />
        <LineEffectLink isNavLink to="/about">
          About
        </LineEffectLink>
        <LineEffectLink isNavLink to="/projects">
          Projects
        </LineEffectLink>
      </div>
    );
  }
}

export default Header;
