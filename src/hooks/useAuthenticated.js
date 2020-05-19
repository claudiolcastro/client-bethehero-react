import { useSelector, useDispatch } from 'react-redux';

import Cookies from 'js-cookie';
import { loginUser } from '../store/login';


export default function useAuthenticated() {
  const dispatch = useDispatch();

  const stateAuth = useSelector((state) => state.login.isAuthenticated);
  const cookieId = Cookies.get('ong_id');
  let isAuthenticated = false;

  const handleCookieAuth = () => {
    dispatch(loginUser(cookieId));
  };

  if (stateAuth) {
    isAuthenticated = true;
  }

  if (!stateAuth && cookieId) {
    handleCookieAuth();
    isAuthenticated = stateAuth;
  }

  return isAuthenticated;
}
