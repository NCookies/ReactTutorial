import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <AsyncApp />
      </Provider>
    );
  }
}

// {() => <AsyncApp />} 으로 넣으면
// React.Children.only expected to receive a single React element child. 오류 발생
