import React from 'react';
import { render } from '@testing-library/react';

import Enzyme, { shallow, ShallowWrapper } from 'enzyme';


import { setup, findByTestAttr} from './TestHelpers';
import App from './App';


test.skip('renders without error', () => {
  const wrapper = setup(App);

  const appComponent1 = findByTestAttr(wrapper, 'Main-component');
  expect(appComponent1.length).toBe(1);

  const appComponent2 = findByTestAttr(wrapper, 'AppBar-component');
  expect(appComponent2.length).toBe(1);

  console.log(wrapper.debug());

});

test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
