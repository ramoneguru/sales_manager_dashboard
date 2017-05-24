import React from 'react';
import { shallow, render, mount } from 'enzyme';
import LineChart from '../src/js/components/charts/LineChart';


describe('LineChart component ', function(){
  "use strict";

  it('should render correctly', () => {
    let activityEfficiency = {};
    let salesReps = {};
    
    const lineChart = shallow(
      <LineChart activityEfficiency={activityEfficiency} salesReps={salesReps} />
    );

    expect(lineChart).toMatchSnapshot();
  });

  it('should invoke renderChart after receiving new props', () => {
    let activityEfficiency = { isFetching:true }
    let salesReps = { isFetching:true }

    const lineChart = mount(
      <LineChart activityEfficiency={ activityEfficiency} salesReps={ salesReps } />
    );
    lineChart.instance().renderChart = jest.fn();
    lineChart.setProps({ activityEfficiency: {}})
    expect(lineChart.instance().renderChart).toHaveBeenCalled()
  });

});
