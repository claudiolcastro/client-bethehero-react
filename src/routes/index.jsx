import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Authenticator from '../components/utils/Authenticator';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NewIncident from '../pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Authenticator path="/profile" component={Profile} />
        <Authenticator path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
