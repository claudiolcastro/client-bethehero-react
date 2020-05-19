import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Authenticator({ path, component }) {
  const isAuth = useSelector((state) => state.login.isAuthenticated);
  const Component = component;

  return (
    <Route exact path={path}>
      {isAuth ? <Component /> : <Redirect to="/" />}
    </Route>
  );
}

export default Authenticator;
