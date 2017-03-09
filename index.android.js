import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

console.log('check')


class ReactTutorial extends Component {
  componentWillMount() {
    this.setState({
      inputText: '',
      todos: [],
    })
  }

  addTodo() {
    let todoItem = this.state.inputText
    let todos = this.state.todos
    todos.push(todoItem)
    this.setState({
      inputText: '',
      todos: todos,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, backgroundColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {
            this.setState({inputText: text})
          }}
          value={this.state.inputText}
        />
        { /* 어떤 함수를 실행할지 */ }
        <TouchableOpacity onPress={this.addTodo.bind(this)}>
          <Text>
            Add Todo
          </Text>
        </TouchableOpacity>
        {
          this.state.todos.map((todoItem, index) => {
            return (
              <Text key={index}>  { /* 리스트의 key 를 index로 설정 */ }
                {todoItem}  { /* index 번째 element */ }
              </Text>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactTutorial', () => ReactTutorial);
