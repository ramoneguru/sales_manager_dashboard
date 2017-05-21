import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderButton from '../src/js/components/header/HeaderButton';


describe('HeaderButton component ', function(){
  "use strict";

  it('should render correctly', () => {
    let menuClickHandler = function(){
      "use strict";
    };

    let active = 0;

    const wrapper = shallow(
      <HeaderButton active={ active } handler={ menuClickHandler }></HeaderButton>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have active prop of type number', () => {
    let menuClickHandler = function(){
      "use strict";
    };

    let active = 0;

    const wrapper = mount(
      <HeaderButton active={ active } handler={ menuClickHandler }></HeaderButton>
    );

    expect(typeof wrapper.prop('active')).toEqual('number');
  });

  it('should have handler prop of type function', () => {
    let menuClickHandler = function(){
      "use strict";
    };

    let active = 0;

    const wrapper = mount(
      <HeaderButton active={ active } handler={ menuClickHandler }></HeaderButton>
    );

    expect(typeof wrapper.prop('handler')).toEqual('function');
  });


});
