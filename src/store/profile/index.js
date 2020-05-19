import axios from 'axios';

// Action Types

export const Types = {
  ADD_ONG_INCIDENTS: 'add_ong_incidents',
};

// Reducer

const initialState = {
  ongIncidents: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_ONG_INCIDENTS:
      return { ongIncidents: [...action.payload] };
    default:
      return state;
  }
};

// Action Creators

export const fetchOngIncidents = (id) => (dispatch) => {
  console.log('FETCH INCIDENTS: ', id);
  axios.get('http://localhost:3333/profile', {
    headers: {
      Authorization: id,
    },
  })
    .then((response) => {
      dispatch({
        type: Types.ADD_ONG_INCIDENTS,
        payload: response.data,
      });
    })
    .catch((error) => console.error(error));
};
