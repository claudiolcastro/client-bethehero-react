import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('Render Header with title', () => {
  const wrapper = shallow(<Header title="Be the hero" />);

  console.log(wrapper);
});
