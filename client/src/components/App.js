// in the client side, we use webpack and babel
// which is comaptible in ES25 modules, so we can use import
import React, { Component } from 'react';
// import the react router
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    // authentication
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/survey" component={Dashboard} />
            <Route path="/survey/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
