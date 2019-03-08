// @flow
import React from 'react';
import radium from 'radium';
import { revealLeft as revealLeftAnimation } from '../../styles/reveal.js';

type Props = {
  children: string,
  color: string,
};

const styles = {
  title: {
    ...revealLeftAnimation,
    transition: 'all 0.24s ease-in',
    WebkitTextStroke: '1px rgba(255, 255, 255, 0.9)',
    fontSize: 128,
    margin: 0,
    '@media screen and (max-width: 767px)': {
      fontSize: '3em',
      margin: '32px 0',
    },
    ':hover': {
      color: '#ffffff',
    },
  },
};

function PageTitle({
  children,
  color,
}: Props) {
  return (
    <h1 style={[
        styles.title, {
          color,
        },
      ]}>
      {children}
    </h1>
  );
}

PageTitle.defaultProps = {
  color: 'transparent',
}

export default radium(PageTitle);
