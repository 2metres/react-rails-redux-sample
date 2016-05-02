import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import FeaturedProducts from '../components/FeaturedProducts';
import ProductComparision from '../components/ProductComparision';

import * as CounterActions from '../actions/loan';

class CompareProducts extends Component {
  render() {
    return (
      <div>
        <FeaturedProducts/>
        <ProductComparision/>
      </div>
    );
  }
}

export default CompareProducts;
