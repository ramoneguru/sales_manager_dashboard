import React from 'react';
import PropTypes from 'prop-types';
import BarChart from '../charts/app-bar-chart';

class Numbers extends React.Component {

  constructor(props) {
    super(props);
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

  render(){
    return (
      <div>
        <header className="numbers-header">
          <h1 className="page-title">Activity Numbers</h1>
          <div className="chart-menu">
            <button type="button">30D</button>
            <button type="button">90D</button>
            <button type="button">12M</button>
          </div>
        </header>
       <figure className="numbers-chart">
         <BarChart primary-data={ this.state.ActivityNumbers.entities }></BarChart>
       </figure>
      </div>
    )
  }
}

Numbers.contextTypes = {
  store: PropTypes.object
};


export default Numbers;