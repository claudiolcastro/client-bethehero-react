import axios from 'axios';
import Cookies from 'js-cookie';

// Action Types

export const Types = {
  LOGIN_USER: 'login_user',
  LOGOUT_USER: 'logout_user',
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

export const loginUser = (id) => (dispatch) => {
  axios.post('http://localhost:3333/login', { id })
    .then((response) => {
      Cookies.set('ong_id', id);
      dispatch({
        type: Types.LOGIN_USER,
        payload: { id, name: response.data.name },
      });
    })
    .catch((e) => console.error(e));
};

export const logoutUser = () => {
  Cookies.remove('ong_id');

  return {
    type: Types.LOGOUT_USER,
    payload: {},
  };
};
