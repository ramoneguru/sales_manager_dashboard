import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Header, { PureHeader } from '../src/js/components/header/Header'

describe('Header component ', function(){
  "use strict";

  it('should render correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('clicking child menu button component should invoke menuClickHandler and toggle menu state from 0 to 1', () => {
    const history = {
      listen:jest.fn()
    }
    const instance = shallow(<PureHeader history={history}/>)
    instance.childAt(0).dive().simulate('click')
    expect(instance.state().menu).toBe(1)
  });
  
});


