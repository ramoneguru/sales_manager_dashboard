import React from 'react';
import PropTypes from 'prop-types';
import BarChart from '../charts/app-bar-chart';
import classNames from 'classnames';

class Numbers extends React.Component {

  constructor(props) {
    super(props);
    this.chartViewClickHandler = this.chartViewClickHandler.bind(this)
  }

  componentWillMount(){
    const { store } = this.context;
    this.setState(store.getState());
  }

  componentDidMount(){
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.globalStateChangeHandler()
    );
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  globalStateChangeHandler(){
    const { store } = this.context;
    this.setState(store.getState());
  }

  chartViewClickHandler(e){
    var chartView = e.target.getAttribute('data-view');
    if(chartView){
      let aux = Object.assign({}, this.state);
      aux.ActivityNumbers.chartView = chartView;
      this.setState(aux)
    }
  }

  render(){
    return (
      <div>
        <header className="numbers-header">
          <h1 className="page-title">Activity Numbers</h1>
          <div className="chart-menu" >
            <span onClick={this.chartViewClickHandler}>
              <button type="button" data-view="30D" className={this.state.ActivityNumbers.chartView === '30D' ? 'active' : ''}>30D</button>
              <button type="button" data-view="90D" className={this.state.ActivityNumbers.chartView === '90D' ? 'active' : ''}>90D</button>
              <button type="button" data-view="12M" className={this.state.ActivityNumbers.chartView === '12M' ? 'active' : ''}>12M</button>
            </span>
          </div>
        </header>

        <BarChart chart-view={this.state.ActivityNumbers.chartView} primary-data={ this.state.ActivityNumbers.entities }></BarChart>

      </div>
    )
  }
}

Numbers.contextTypes = {
  store: PropTypes.object
};


export default Numbers;