import React, { Component }  from 'react';
import { render } from '@testing-library/react';

import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Main from './Main'


Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (Componet: any, props={}, state:any=null) => {
    const wrapper = shallow(<Componet {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}

describe.skip('Main component',()=>{

    it('should render',()=>{
        const main = render(<Main />);
    })

})