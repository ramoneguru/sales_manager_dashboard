import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderButton from '../src/js/components/header/HeaderButton';


describe('HeaderButton component ', function(){
  "use strict";

  it('should render correctly', () => {
    const menuClickHandler = jest.fn();
    const active = 0;
    const wrapper = shallow(
      <HeaderButton active={ active } handler={ menuClickHandler } />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have active prop of type number', () => {
    const menuClickHandler = jest.fn();
    const active = 0;
    const wrapper = mount(
      <HeaderButton active={ active } handler={ menuClickHandler } />
    );

    expect(typeof wrapper.prop('active')).toEqual('number');
  });

  it('should have handler prop of type function', () => {
    const menuClickHandler = jest.fn();
    const active = 0;
    const wrapper = mount(
      <HeaderButton active={ active } handler={ menuClickHandler } />
    );

    expect(typeof wrapper.prop('handler')).toEqual('function');
  });


});
