// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'

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

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/*todo form*/}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
