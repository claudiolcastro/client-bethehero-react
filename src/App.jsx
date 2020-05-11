import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Router from './routes';
import './assets/scss/main.scss';

function App() {
  return (
    <Provider store={store}>
      <main>
        <Router />
      </main>
    </Provider>
  );
}


export default App;
