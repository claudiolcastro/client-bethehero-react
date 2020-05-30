import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Root from '../../../Root';
import Aunthenticator from '../../../components/utils/Authenticator';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <BrowserRouter>
      <Root>
        <Aunthenticator />
      </Root>
    </BrowserRouter>,
  );
});

it('renders', () => {
  console.log(wrapper.debug());
});
