// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './stores/index';

import App from './components/App/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = props => {
   const {about, dispatch} = props;

    return (
        <Router {...props}>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about">
                    <About {...about} dispatch={dispatch}/>
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

function mapStateToProps(state) {
    return { about: state.AboutReducer.toJS() };
}

const ConnectedComponent = connect(mapStateToProps)(Routes);

export default function Root(props) {
  return <Provider store={store}><ConnectedComponent {...props}/></Provider>
}


