import axios from 'axios';
import Cookies from 'js-cookie';

// Action Types

export const Types = {
  LOGIN_USER: 'login_user',
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
    default:
      return state;
  }
};

// Action Creators

export const loginUser = (id) => (dispatch) => {
  console.log('ACTION LOGIN');
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
