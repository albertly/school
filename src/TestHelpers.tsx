// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom/extend-expect';

import React, { Component } from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new EnzymeAdapter() });

export const setup = (Componet: any, props={}, state:any=null) => {
  const wrapper = shallow(<Componet {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
}

export const findByTestAttr = (wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
}
