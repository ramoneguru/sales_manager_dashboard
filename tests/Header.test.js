import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Header from '../src/js/components/header/Header';


describe('Header component ', function(){
  "use strict";

  it('should render correctly', () => {
    const wrapper = shallow(
      <Header></Header>
    );

    expect(wrapper).toMatchSnapshot();
  });
  
});
