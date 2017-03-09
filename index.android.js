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
        <View style={styles.left}>
        </View>
        <View style={styles.right}>
          <View style={styles.rightTop}>

          </View>
          <View style={styles.rightBottom}>

          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    backgroundColor: 'red'
  },
  right: {
    flex: 1,
    flexDirection: 'column',
  },
  rightTop: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  rightBottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue'
  }

});

AppRegistry.registerComponent('ReactTutorial', () => gitbookTest);
