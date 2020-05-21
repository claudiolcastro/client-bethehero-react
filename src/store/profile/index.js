import { fetchOngIncidentsAPI } from '../../services/api';

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

export const fetchOngIncidents = (id) => async (dispatch) => {
  const incidents = await fetchOngIncidentsAPI(id);

  dispatch({
    type: Types.ADD_ONG_INCIDENTS,
    payload: incidents,
  });
};
