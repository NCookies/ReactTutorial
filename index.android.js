import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class gitbookTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <Body />
      </View>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text>
          NavBar
        </Text>
      </View>
    )
  }
}

class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.left}>
        </View>
        <View style={styles.right}>
          <View style={styles.rightTop}>
          </View>
          <View style={styles.rightBottom}>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    height: 60,
    backgroundColor: '#B0B0B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    backgroundColor: 'red'
  },
  right: {
    flex: 2,
    flexDirection: 'column',
  },
  rightTop: {
    flex: 1,
    backgroundColor: 'blue'
  },
  rightBottom: {
    flex: 2,
    backgroundColor: 'yellow'
  }

});

AppRegistry.registerComponent('ReactTutorial', () => gitbookTest);
