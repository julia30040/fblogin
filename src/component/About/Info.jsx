// @flow
import React from 'react';
import radium from 'radium';
import LinkIcon from '../Element/LinkIcon.jsx';
import LineEffectLink from '../Element/LineEffectLink.jsx';

const styles = {
  wrapper: {
    padding: '16px 0 0 48px',
    '@media screen and (max-width: 767px)': {
      padding: 16,
    },
  },
  description: {
    color: '#fff',
    letterSpacing: 1,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  h2: {
    color: '#292723',
  },
};

function Info() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.h2}>I'm Julia 王心瑀, a front-end developer based in Taiwan.</h2>
      <p style={styles.description}>
        擅長 JavaScript 及 CSS 互動，讓生活變得更簡單更有趣。興趣是聽獨立音樂彈吉他、蒐集
        <LineEffectLink href="https://soundcloud.com/musicdiary_tw">生活中的聲音</LineEffectLink>
        、種植物、打羽球；觀察社會現象，盡力以客觀角度了解事件。
      </p>
      <p style={styles.description}>
        familiar with ReactJS, ReactNative, CSS
      </p>
      <p style={styles.description}>
        julia135793@gmail.com<br />
        +886 906152406
      </p>
      <div style={styles.row}>
        <LinkIcon
          iconClass="fab fa-codepen"
          url="https://codepen.io/julia135793/" />
        <LinkIcon
          iconClass="fab fa-github"
          url="https://github.com/julia30040" />
      </div>
    </div>
  );
}

export default radium(Info);
