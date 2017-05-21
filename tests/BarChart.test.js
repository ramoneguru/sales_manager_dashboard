import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BarChart from '../src/js/components/charts/BarChart';


describe('BarChart component ', function(){
  "use strict";

  it('should render correctly', () => {
    let activityNumbers = {};
    let salesReps = {};
    let chartView = "30D";
    
    const wrapper = shallow(
      <BarChart activityNumbers={ activityNumbers} salesReps={ salesReps } chartView={ chartView }></BarChart>
    );

    expect(wrapper).toMatchSnapshot();
  });

});
