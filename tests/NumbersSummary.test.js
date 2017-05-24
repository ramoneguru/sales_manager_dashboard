import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NumbersSummary from '../src/js/components/numbers/NumbersSummary';


describe('NumbersSummary component ', function(){
  "use strict";

  let activityNumbers, salesReps, summary;

  beforeEach(function(){
    activityNumbers = [{
      "repId": 85719831,
      "30D": [ 1800, 1400, 800, 500 ],
      "90D": [ 5400, 3800, 3200, 1700 ],
      "12M": [ 21600, 18300, 13500, 1200 ]
    },
      {
        "repId": 85719832,
        "30D": [ 1800, 1400, 800, 500 ],
        "90D": [ 5400, 3800, 3200, 1700 ],
        "12M": [ 21600, 18300, 13500, 1200 ]
      }]
    salesReps = {
      "85719831": {
        "name": "Marie Curie",
        "avatar":"85719831.jpeg",
        "report":{
          "dials":3844,
          "connects":333,
          "opps":11,
          "deals":1,
          "dialConnectRatio":[12,1],
          "dialOppRatio":[349,1],
          "oppDealRatio":[11,1],
          "dialDealRatio":[3844,1]
        }
      },
      "85719832": {
        "name": "Marie Curie",
        "avatar":"85719831.jpeg",
        "report":{
          "dials":3844,
          "connects":333,
          "opps":11,
          "deals":1,
          "dialConnectRatio":[12,1],
          "dialOppRatio":[349,1],
          "oppDealRatio":[11,1],
          "dialDealRatio":[3844,1]
        }
      }
    }

    summary = shallow(
      <NumbersSummary activityNumbers={ activityNumbers } salesReps={ salesReps } />
    );
  });

  it('should render correctly', () => {
    expect(summary).toMatchSnapshot()
  });

  it('should contain one summary item per sales rep', () => {
    const items = summary.find('SummaryItem')
    expect(items.length).not.toBe(1)
    expect(items.length).toBe(2)
  });

});
