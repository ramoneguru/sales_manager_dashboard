import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderButton from '../src/js/components/header/HeaderButton';


describe('HeaderButton component ', function(){
  "use strict";

  it('should render correctly', () => {
    const menuClickHandler = jest.fn();
    const active = 0;
    const button = mount(
      <HeaderButton active={ active } handler={ menuClickHandler } />
    );

    expect(button).toMatchSnapshot();
    expect(typeof button.prop('active')).toEqual('number');
    expect(typeof button.prop('handler')).toEqual('function');
  });


  it('should contain active class name when active prop is 1', () => {
    const menuClickHandler = jest.fn();
    const active = 1;
    const button = shallow(
      <HeaderButton active={ active } handler={ menuClickHandler } />
    );
    expect(button.node.props.className).toContain('active')
  });


});
