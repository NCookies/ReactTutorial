// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
// import User from './components/user.js'
// import NavBar from './components/navBar.js'
// import ButtonGroup from './components/buttonGroup.js'
// import Tabs from './components/tabs.js'
//
//
// class ReactTutorial extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <NavBar />
//         <User />
//         <View style={{height: 40}}>
//         </View>
//         <ButtonGroup />
//         <View style={{flex: 1}}>
//         </View>
//         <Tabs />
//       </View>
//     );
//   }
// }
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
// });
//
// AppRegistry.registerComponent('ReactTutorial', () => ReactTutorial);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';


// react lifecycle
// componentWillMount -> render -> componentDidMount
class ReactTutorial extends Component {
  componentWillMount() { // 실제 render 하기 전에 실행되는 함수
    this.setState({
      inputText: '',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40,borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => { this.setState({inputText: text}) }}
          value={this.state.inputText}
          />
        <Text>
          {this.state.inputText}
        </Text>
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
