import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/Header';
import Router from './routes';
import './assets/scss/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Header title="Be The Hero!" />
      <main>
        <Router />
      </main>
    </Provider>
  );
}


export default App;
