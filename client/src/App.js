import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';
import TrialPage from './pages/trial-page/trial-page';
import NavBar from './components/nav-bar/nav-bar.component';
import OffersPage from './pages/offers-page/offers-page.component';
import WelcomePage from './pages/welcome-page/welcome-page.component';
import NegotiationPage from './pages/negotiation-page/negotiation-page.component';
import SurveyPage from './pages/survey-page/survey-page.component';
import './css/stylesheet.css';
import './App.css';

class App extends Component {
    // initialize our state


    // here is our UI
    // it is easy to understand their functions when you
    // see them render into our screen
    render() {
        return (
            <div className='all'>
                <div>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Lemon|Nunito|Oleo+Script+Swash+Caps:700|Spicy+Rice&display=swap" rel="stylesheet"></link>
                </div>

                <div>
                    <NavBar />
                    <div className='display-page'>
                        <Switch>
                            <Route exact={true} path='/' component={WelcomePage} />
                            <Route exact={true} path='/offers' component={OffersPage} />
                            <Route exact={true} path='/negotiation-tips' component={NegotiationPage} />
                            <Route exact={true} path='/survey' component={SurveyPage} />
                            <Route exact={true} path='/trial' component={TrialPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;