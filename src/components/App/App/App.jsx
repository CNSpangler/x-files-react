import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../../containers/Home/Home.jsx';
import Detail from '../../../containers/Detail/Detail.jsx';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/characters/:name" component={Detail} />
          </Switch>
        </Router>
      </>
    );
  }
}
