import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundary from './errorBoundary.js';
const App = lazy(() => import('./App.js'));
const Dashboard = lazy(() => import('./Dashboard.js'));

export default () => (
  <ErrorBoundary isRouter appName="Router boi">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
      </Suspense>
    </Router>
  </ErrorBoundary>
);
