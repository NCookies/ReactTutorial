import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class NavBar extends Component {
  render() {
    return(
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>
          더 보기
        </Text>
      </View>
    )
  }
}

class User extends Component {
  render() {
    return(
      <View style={styles.user}>
        <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 100}}>
            <View style={{width: 100, height: 100}} >
              <Image source={require('./img/avatar.png')} style={{width: 100, height: 100}}/>
            </View>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{fontSize: 30}}>닉네임</Text>
            <Text style={{color: 'gray', fontSize: 15}}>이름 / ID</Text>
            <Text style={{color: 'gray', fontSize: 15}}>학교이름</Text>
          </View>
        </View>
        <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./img/list.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>내가 쓴 글</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./img/chat.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>댓글 단 글</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth: 0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./img/star.png')} style={{width: 30, height: 30}}/>
            <Text style={{marginLeft: 5}}>스크랩</Text>
          </View>
        </View>
      </View>
    )
  }
}

class ButtonGroup extends Component {
  render() {
    return(
      <View style={styles.buttonGroup}>

      </View>
    )
  }
}
class Taps extends Component {
  render() {
    return(
      <View style={styles.taps}>

      </View>
    )
  }
}


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
        <Taps />
      </View>
    );
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
  },
  user: {
    height: 200,
    backgroundColor: '#81D4FA',
  },
  buttonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5',
  },
  taps: {
    height: 100,
    backgroundColor: '#FFD54F',
  },
  navBar: {
    height: 60,
    backgroundColor: '#FF6E40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 20,
    color: 'white',
  }
});

AppRegistry.registerComponent('ReactTutorial', () => ReactTutorial);
