// Action Types

export const Types = {};

// Reducer

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.TYPE: // fake type
      return {};
    default:
      return state;
  }
};

// Action Creators

export const fakeAction = () => ({
  type: Types.TYPE, // fake type
  payload: null,
});
