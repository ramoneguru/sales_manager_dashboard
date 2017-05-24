import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BarChart from '../src/js/components/charts/BarChart';


describe('BarChart component ', function(){
  "use strict";

  it('should render correctly', () => {
    let activityNumbers = {};
    let salesReps = {};
    let chartView = "30D";
    const barChart = shallow(
      <BarChart activityNumbers={ activityNumbers} salesReps={ salesReps } chartView={ chartView } />
    );
    expect(barChart).toMatchSnapshot();
  });


  it('should invoke renderChart after receiving new props', () => {
    let activityNumbers = { isFetching:true }
    let salesReps = { isFetching:true }
    let chartView = "30D";

    const barChart = mount(
      <BarChart activityNumbers={ activityNumbers} salesReps={ salesReps } chartView={ chartView } />
    );
    barChart.instance().renderChart = jest.fn();
    barChart.setProps({ chartView: '90D'})
    expect(barChart.instance().renderChart).toHaveBeenCalled()
  });
  
 

});
