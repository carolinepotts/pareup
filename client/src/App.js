import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TrialPage from './pages/trial-page/trial-page';
import Header from './components/header/header.component';
import OffersPage from './pages/offers-page/offers-page.component';
import WelcomePage from './pages/welcome-page/welcome-page.component';
import NegotiationPage from './pages/negotiation-page/negotiation-page.component';
import SurveyPage from './pages/survey-page/survey-page.component';

class App extends Component {
  // initialize our state


  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={WelcomePage} />
          <Route exact={true} path='/offers' component={OffersPage} />
          <Route exact={true} path='/negotiation-tips' component={NegotiationPage} />
          <Route exact={true} path='/survey' component={SurveyPage} />
          <Route exact={true} path='/trial' component={TrialPage} />
        </Switch>
      </div>
    );
  }
}

export default App;