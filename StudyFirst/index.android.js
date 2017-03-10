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


class TodoItem extends Component {
  completeTodo(index) {
    let todos = this.state.todos
    todos[index].complete = !todos[index].complete
    this.setState({
      todos: todos,
    })
  }

  deleteTodo (index) {
    let todos = this.state.todos
    todos.splice(index, 1)
    this.setState({
      todos: todos,
    })
  }


  render() {
    let todoItem = this.props.item
    console.log(this.props)
    let index = this.props.index
    return(
      <View style={{flexDirection: 'row'}}>
        <Text style={todoItem.complete ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}>
          {todoItem.context}
        </Text>
        <TouchableOpacity onPress={this.completeTodo.bind(this.props.todoApp, index)}>
          <Text>{todoItem.complete ? "---complete" : "---incomplete" }</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.deleteTodo.bind(this.props.todoApp, index)}>
          <Text>     delete </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class ReactTutorial extends Component {
  componentWillMount() {
    this.setState({
      inputText: '',
      todos: [],
    })
  }

  addTodo() {
    let todoItem = {
      context: this.state.inputText,
      complete: false
    }
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
          style={{height: 40,borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {
            this.setState({inputText: text})
          }}
          value={this.state.inputText}
          />
        <TouchableOpacity onPress={this.addTodo.bind(this)}>
          <Text>
            add Todo
          </Text>
        </TouchableOpacity>
        {
          this.state.todos.map((todoItem, index)=> {
            console.log(todoItem)
            console.log(index)
            return (
              <TodoItem item={todoItem} key={index} index={index} todoApp={this}/>
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
