import React from 'react';
import { Link } from 'react-router-dom';
import StoreWatchMixin from '../../mixins/StoreWatchMixin'//higher order function

let efficiencyWillMount = () => {
  console.log('***** efficiencyWillMount *****');
}

const Efficiency = ( props ) => {

  return (
    <div>
      <h1>Efficiency Page</h1>
      <Link to="/">Continue Shopping</Link>
    </div>
  )
}

export default StoreWatchMixin(Efficiency, efficiencyWillMount);