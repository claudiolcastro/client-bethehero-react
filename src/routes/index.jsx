import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Cookies from 'js-cookie';

import Authenticator from '../components/utils/Authenticator';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NewIncident from '../pages/NewIncident';

export default function Routes() {
  const cookieId = Cookies.get('ong_id');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {cookieId ? <Redirect to="/profile" /> : <Login />}
        </Route>
        <Route path="/register" component={Register} />
        <Authenticator path="/profile" component={Profile} />
        <Authenticator path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
