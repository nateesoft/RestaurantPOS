import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TotalItem = ({tableNo, netTotalAmount}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTableNo}>TABLE {tableNo}</Text>
      <Text style={styles.textTotal}>Total ${netTotalAmount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#123456',
    flexDirection: 'row',
  },
  textTableNo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'chocolate',
    padding: 10,
  },
  textTotal: {
    fontSize: 35,
    fontWeight: '600',
    color: 'white',
  },
});

export default TotalItem;
