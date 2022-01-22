// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'eat', key: '1'},
    { text: 'drink', key: '2'},
    { text: 'sleep', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        Alert.alert(
          'OK',
          'done',
          [
          {text: 'ok', onPress: () => console.log('added')}
          ]
        )
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      });
    } else {
      Alert.alert(
        'OOPS',
        '3 chars must be',
        [
        {text: 'ok', onPress: () => console.log('closed')}
        ]
      )
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={( {item} ) => (
                // <Text>{item.text}</Text>
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
