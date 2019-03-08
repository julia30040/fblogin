// @flow

import React from 'react';
import radium from 'radium';
import { NavLink } from 'react-router-dom';
import MouseEventHook from './MouseEventHook.jsx';

const styles = {
  wrapper: {
    position: 'relative',
  },
  navLink: {
    margin: '0 0 32px',
  },
  a: {
    color: '#9bd386',
    textDecoration: 'none',
    wordBreak: 'keep-all',
  },
};

type Props = {
  url: string,
  children: string,
  isNavLink?: boolean,
  to?: string,
};

function LineEffectLink({
  href,
  children,
  isNavLink,
  to,
}: Props) {
  return (
    <MouseEventHook>
      <span style={styles.wrapper}>
        {isNavLink ? (
          <NavLink
            className="line-effect"
            to={to}>
            {children}
          </NavLink>
        ) : (
          <a
            style={styles.a}
            className="line-effect"
            href={href}
            rel="noopener noreferrer"
            target="_blank" >
            {children}
          </a>
        )}
      </span>
    </MouseEventHook>
  );
}

LineEffectLink.defaultProps = {
  isNavLink: false,
  to: null,
};

export default radium(LineEffectLink);
