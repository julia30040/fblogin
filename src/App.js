import React, { Component } from 'react';
import debug from 'debug';
import radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router } from "react-router-dom";
import MainBoard from './container/MainBoard.jsx';

if (process.env.NODE_ENV !== 'production') {
  debug.enable('Portfolio:*');
}

const styles = {
  fullHeight: {
    height: '100%',
  },
  wrapper: {
    overflow: 'hidden',
  },
};

class App extends Component {
  render() {
    return (
      <StyleRoot style={styles.fullHeight}>
        <Router>
          <div style={[
              styles.wrapper,
              styles.fullHeight,
            ]}>
            <MainBoard />
          </div>
        </Router>
      </StyleRoot>
    );
  }
}

export default radium(App);
