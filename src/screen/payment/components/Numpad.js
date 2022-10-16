import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Icons from 'react-native-vector-icons/Feather';

const NumberPad = ({item}) => {
  if (item === 'DEL') {
    return (
      <TouchableHighlight
        onPress={() => console.log('touch')}
        underlayColor="white"
        style={{flex: 1}}>
        <View style={styles.imagePad}>
          <Icons name="delete" size={35} color="white" />
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <View style={styles.textContainer}>
      <TouchableHighlight
        onPress={() => console.log('touch')}
        underlayColor="white">
        <Text style={styles.numpad}>{item}</Text>
      </TouchableHighlight>
    </View>
  );
};

const NumpadControl = () => {
  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={130}
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'DEL']}
        renderItem={NumberPad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  imagePad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B05E00',
    borderRadius: 10,
  },
  textContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  numpad: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 110,
    backgroundColor: '#B05E00',
    textAlignVertical: 'center',
    color: 'white',
    borderRadius: 10,
  },
});

export default NumpadControl;
