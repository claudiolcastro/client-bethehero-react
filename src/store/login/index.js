import Cookies from 'js-cookie';

import { fetchUserSession } from '../../services/api';

// Action Types

export const Types = {
  LOGIN_USER: 'login/LOGIN_USER',
  LOGOUT_USER: 'login/LOGOUT_USER',
};

// Reducer

const initialState = {
  isAuthenticated: false,
  id: null,
  ongName: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      return { isAuthenticated: true, id: action.payload.id, ongName: action.payload.name };
    case Types.LOGOUT_USER:
      return { isAuthenticated: false, id: null, ongName: null };
    default:
      return state;
  }
};

// Action Creators

export const loginUser = (id) => async (dispatch) => {
  const loginData = await fetchUserSession(id);

  Cookies.set('ong_id', id);
  dispatch({
    type: Types.LOGIN_USER,
    payload: loginData,
  });
};

export const logoutUser = () => {
  Cookies.remove('ong_id');

  return {
    type: Types.LOGOUT_USER,
    payload: {},
  };
};
