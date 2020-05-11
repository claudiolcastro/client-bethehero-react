import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/Header';
import Login from './pages/Login';

import './assets/scss/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Header title="Be The Hero!" />
      <main>
        <Login />
      </main>
    </Provider>
  );
}


export default App;
