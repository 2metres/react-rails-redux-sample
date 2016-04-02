import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import FeaturedProducts from '../components/FeaturedProducts';
import ProductList from '../components/ProductList';

import * as CounterActions from '../actions/loan';

class CompareProducts extends Component {
  render() {
    return (
      <div>
        <FeaturedProducts/>
        <ProductList/>
      </div>
    );
  }
}

export default CompareProducts;
