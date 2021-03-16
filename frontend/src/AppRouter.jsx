import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import History from './pages/about/History';
import Staff from './pages/about/Staff';
import Employee from './pages/about/Employee';
import ScientificWork from './pages/about/ScientificWork';
import Cooperation from './pages/about/Cooperation';
import Conference from './pages/about/Conference';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Index />} />
      <Route exact path="/about/history" render={() => <History />} />
      <Route exact path="/about/staff" render={() => <Staff />} />
      <Route
        exact
        path="/about/staff/:slug"
        render={(props) => <Employee params={props.match.params} />}
      />
      <Route
        exact
        path="/about/scientific-work"
        render={() => <ScientificWork />}
      />
      <Route exact path="/about/cooperation" render={() => <Cooperation />} />
      <Route exact path="/about/conference" render={() => <Conference />} />
    </Switch>
  );
}

export default AppRouter;
