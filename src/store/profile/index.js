// Action Types

export const Types = {
  ADD_NAME: 'add_name',
};

// Reducer

const initialState = {
  name: 'Insert your name..',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_NAME:
      return { name: action.payload };
    default:
      return state;
  }
};

// Action Creators

export const addName = (name) => ({
  type: Types.ADD_NAME,
  payload: name,
});
