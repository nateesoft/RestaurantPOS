import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TotalItem = ({netTotalAmount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TOTAL {netTotalAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#123456',
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    color: 'white',
  },
});

export default TotalItem;
