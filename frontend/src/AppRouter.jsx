import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import History from './pages/about/History';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Index />} />
      <Route exact path="/about/history" render={() => <History />} />
    </Switch>
  );
}

export default AppRouter;
