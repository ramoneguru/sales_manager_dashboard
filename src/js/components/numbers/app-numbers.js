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
        <h1>Activity Numbers</h1>
        <BarChart data={ this.state.ActivityNumbers.entities }></BarChart>
      </div>
    )
  }
}

Numbers.contextTypes = {
  store: PropTypes.object
};


export default Numbers;