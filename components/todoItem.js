import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({ item, pressHandler }) {

  return (
    <View style={styles.main}>

      <TouchableOpacity style={styles.main}>
        <View style={styles.item}>
          <Text>{item.text}</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.icon} onPress={() => pressHandler(item.key)}>
        <MaterialIcons name='delete' size={25} color='green'/>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    padding: 18,
    marginBottom: 15,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flex: 1
  },
  itemText: {
    marginLeft: 10,
  },
  icon: {
    padding: 18,
    marginBottom: 15,
  }
});