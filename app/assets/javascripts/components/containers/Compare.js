import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';

import CompareProducts from './CompareProducts';

const store = configureStore();

class Compare extends Component {
  render() {
    return (
      <Provider store={store}>
        <CompareProducts/>
      </Provider>
    );
  }
}

export default Compare;
