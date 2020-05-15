import axios from 'axios';

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
  axios.post('http://localhost:3333/login', { id })
    .then((response) => {
      dispatch({
        type: Types.LOGIN_USER,
        payload: { id, name: response.data.name },
      });
    })
    .catch((e) => console.error(e));
};
