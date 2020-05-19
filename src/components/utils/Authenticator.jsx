import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import { loginUser } from '../../store/login';

function Authenticator({ path, component, redirect = '/' }) {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.login.isAuthenticated);
  const cookieId = Cookies.get('ong_id');
  const Component = component;

  useEffect(() => {
    if (!isAuth && cookieId) {
      dispatch(loginUser(cookieId));
    }
  }, []);

  return (
    <Route exact path={path}>
      {(isAuth || cookieId) ? <Component /> : <Redirect to={redirect} />}
    </Route>
  );
}

export default Authenticator;
