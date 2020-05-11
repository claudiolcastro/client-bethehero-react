import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import loginReducer from './login';
import profileReducer from './profile';

const reducers = combineReducers({
  login: loginReducer,
  profile: profileReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
