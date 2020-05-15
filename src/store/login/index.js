import axios from 'axios';

// Action Types

export const Types = {
  LOGIN_USER: 'login_user',
};

// Reducer

const initialState = {
  isAuthenticated: false,
  ongName: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      return { isAuthenticated: true, ongName: action.payload };
    default:
      return state;
  }
};

// Action Creators

export function loginUser(id) {
  return (dispatch) => {
    axios.post('http://localhost:3333/login', { id })
      .then((response) => {
        dispatch({
          type: Types.LOGIN_USER,
          payload: response.data.name,
        });
      })
      .catch((e) => console.error(e));
  };
}
