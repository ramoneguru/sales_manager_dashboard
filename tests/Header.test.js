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

  it('clicking header menu button should update header menu state', () => {
    const history = {
      listen:jest.fn()
    }
    const instance = shallow(<PureHeader history={history}/>)
    instance.childAt(0).dive().simulate('click')
    expect(instance.state().menu).toBe(1)
  });

  it('clicking header menu button should apply active class to overlay', () => {
    const history = {
      listen:jest.fn()
    }
    const instance = shallow(<PureHeader history={history}/>)
    instance.childAt(0).dive().simulate('click')
    expect(instance.find('.overlay').get(0).props.className).toContain('active')
  });

  it('clicking navigation link should invoke history listen fn', () => {
    const history = {
      listen:jest.fn()
    }
    const instance = shallow(<PureHeader history={history}/>)
    instance.find('.app-nav').childAt(0).simulate('click')
    expect(history.listen).toHaveBeenCalled()
  });
  
});


