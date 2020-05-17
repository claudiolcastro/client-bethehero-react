import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';
import { loginUser } from '../store/login';


export default function useAuthenticated(loginPage = false) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.login.isAuthenticated);

  // TODO: improve Auth logic
  useEffect(() => {
    if (!isAuth) {
      const ongIdCookie = Cookies.get('ong_id');

      if (ongIdCookie) {
        dispatch(loginUser(ongIdCookie));
        if (!isAuth) history.push('/');
      } else { history.push('/'); }
    } else if (loginPage) history.push('/profiles');
  }, [isAuth]);
}
