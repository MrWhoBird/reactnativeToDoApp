import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  //state creates state for component
  const [todos, setTodos] = useState([]);

  //-------------------------------------------------------------------------------------------------------

  //effect runs code at every render (also when the state changes)
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(todos);
  }, [todos]);

  //-------------------------------------------------------------------------------------------------------

  //load data from local storage
  const getData = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos')
      if(todos != null){
        setTodos(JSON.parse(todos))
      }
    } catch(e) {
      console.log(e)
    }
  }
  
  //save data in local storage
  const storeData = async (todos) => {
    try {
      const stringifyTodos = JSON.stringify(todos)
      await AsyncStorage.setItem('todos', stringifyTodos)
    } catch (e) {
      console.log(e)
    }
  }

  //delete todo
  const deleteHandler = (key) => {
    Alert.alert(
      '',
      'Do you really want to delete this Todo?',
      [
      {text: 'Sure', onPress: () => {
        setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.key != key);
        });
      }
    },
      {text: 'No, keep it'}
      ]
    )
  }

  //set todo as completed
  const completeHandler = key => {
    const updatedTodo = todos.map(todo => {
      return todo.key == key ? {...todo, completed: !todo.completed} : todo
    })
    setTodos(updatedTodo)  
  }

  //add todo
  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        let id = Math.random().toString()
        Alert.alert(
          'GREAT!',
          'You ToDo has been added to the list',
          [
          {text: 'OK', onPress: () => console.log('added')}
          ]
        )
        return [
          {text: text, completed: false , key: id},
          ...prevTodos
        ]; 
      });
    } else {
      Alert.alert(
        'YOUR TODO IS SO SHORT...',
        'Please type more than 3 characters',
        [
        {text: 'OK', onPress: () => console.log('too short')}
        ]
      )
    }
  }

  //-------------------------------------------------------------------------------------------------------

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <Header/>

        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={( {item} ) => (
                <TodoItem item={item} deleteHandler={deleteHandler} completeHandler={completeHandler}/>
              )}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.deleteAll} onPress={() => setTodos([])}>
          <MaterialIcons name='delete' size={55} color='red'/>
          <Text>DELETE ALL TODOS</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFF6',
  },
  content: {
    flex: 1,
    padding: 40,
    // backgroundColor: 'yellow'
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: 'red'
  },
  deleteAll: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});