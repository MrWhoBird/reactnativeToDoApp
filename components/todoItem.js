import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// export default function TodoItem(props) {
    export default function TodoItem({ item, pressHandler }) {

  return (
    <View style={styles.main}>

      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>

      <TouchableOpacity style={styles.tcbop} onPress={() => pressHandler(item.key)}>
          <MaterialIcons name='delete' size={25} color='coral'/>
          {/* <Text style={styles.item}>{props.item.text}</Text> */}
          {/* <Text style={styles.itemText}>{item.text}</Text> */}
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    // backgroundColor: 'yellow'
  },
  item: {
    padding: 18,
    marginBottom: 15,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    // backgroundColor: 'red',
    flex: 10
  },
  itemText: {
    marginLeft: 10,
  },
  tcbop: {
    // backgroundColor: 'pink',
    padding: 18,
    flex: 1,
    marginBottom: 15,
    // borderColor: '#bbb',
    // borderWidth: 1,
    // borderStyle: 'dashed',
    // borderRadius: 10
  }
});