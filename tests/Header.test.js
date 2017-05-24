import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import Header, { PureHeader } from '../src/js/components/header/Header'

describe('Header component ', function(){
  "use strict";

  it('should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update header menu state when header menu button is clicked ', () => {
    const history = {
      listen:jest.fn()
    }
    const instance = shallow(<PureHeader history={history}/>)
    instance.childAt(0).dive().simulate('click')
    expect(instance.state().menu).toBe(1)
  });

  it('should apply active class to overlay when header menu button is clicked ', () => {
    const history = {
      listen:jest.fn()
    }
    const instance = shallow(<PureHeader history={history}/>)
    instance.childAt(0).dive().simulate('click')
    expect(instance.find('.overlay').get(0).props.className).toContain('active')
  });

  it('should invoke history listen fn when navigation link is clicked', () => {
    const history = {
      listen:jest.fn()
    }
    const instance = shallow(<PureHeader history={history}/>)
    instance.find('.app-nav').childAt(0).simulate('click')
    expect(history.listen).toHaveBeenCalled()
  });
  
});


