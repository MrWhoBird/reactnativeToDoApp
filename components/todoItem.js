import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({ item, deleteHandler, completeHandler }) {

  return (
    <View style={styles.main}>

      <TouchableOpacity style={styles.main}>
        <View style={styles.item}>
          <Text style={{
            textDecorationLine: item.completed?'line-through':'none',
            fontSize: 20
          }}>
            {item.text}
          </Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.icon} onPress={() => completeHandler(item.key)}>
        <MaterialIcons name='done' size={25} color='green'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={() => {deleteHandler(item.key)}}>
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
  icon: {
    padding: 18
  }
});