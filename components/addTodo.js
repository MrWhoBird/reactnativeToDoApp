import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
      setText(val)
  }

  return (
    <View>
      <TextInput
          style={styles.input}
          placeholder='new todo...'
          onChangeText={val => changeHandler(val)}
          value = {text}
      />
      <Button onPress={() => {submitHandler(text); setText('');}} title='Add ToDo' color='green'/>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});