// @flow
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';

class MainBoard extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Fragment>
    );
  }
}

export default MainBoard;
