import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';
import { loginUser } from '../store/login';


export default function useAuthenticated() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.login.isAuthenticated);

  useEffect(() => {
    if (!isAuth) {
      const ongIdCookie = Cookies.get('ong_id');
      if (ongIdCookie) {
        return dispatch(loginUser(ongIdCookie));
      }
      return history.push('/');
    }

    return true;
  }, []);
}
