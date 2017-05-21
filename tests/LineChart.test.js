import React from 'react';
import { shallow, render, mount } from 'enzyme';
import LineChart from '../src/js/components/charts/LineChart';


describe('LineChart component ', function(){
  "use strict";

  it('should render correctly', () => {
    let activityEfficiency = {};
    let salesReps = {};
    
    const wrapper = shallow(
      <LineChart activityEfficiency={activityEfficiency} salesReps={salesReps}></LineChart>
    );

    expect(wrapper).toMatchSnapshot();
  });

});
