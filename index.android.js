import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import User from './components/user.js'
import NavBar from './components/navBar.js'
import ButtonGroup from './components/buttonGroup.js'
import Tabs from './components/tabs.js'


class ReactTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{height: 40}}>
        </View>
        <ButtonGroup />
        <View style={{flex: 1}}>
        </View>
        <Tabs />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('ReactTutorial', () => ReactTutorial);
