/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Bookmark from './components/Bookmark';


export default class Prototype extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="bookmark" component={Bookmark} title="대전버스" hideNavBar
          initial={true} />
        </Scene>
      </Router>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
  },
  titleText: {
    color: 'white',
    fontSize: 20
  }
});


AppRegistry.registerComponent('Prototype', () => Prototype);
