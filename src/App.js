import React, { Component } from 'react';
import debug from 'debug';
import radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import MainBoard from './container/MainBoard.jsx';
import store from './reducers/index.js';

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
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default radium(App);
