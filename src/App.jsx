import React from 'react';

import Root from './Root';

import Router from './routes';
import './assets/scss/main.scss';

function App() {
  return (
    <Root>
      <main>
        <Router />
      </main>
    </Root>
  );
}


export default App;
