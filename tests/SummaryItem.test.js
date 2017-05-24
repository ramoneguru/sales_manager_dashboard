import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SummaryItem from '../src/js/components/numbers/SummaryItem';


describe('SummaryItem component ', function(){
  "use strict";

  it('should render correctly', () => {
    const name = 'mock'
    const avatar = 'mock'
    const data = []
    const item = mount(
      <SummaryItem name={ name } avatar={ avatar } data={ data } />
    );

    expect(item).toMatchSnapshot()
  });

});
