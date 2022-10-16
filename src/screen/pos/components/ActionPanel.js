import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GetButton = ({title}) => {
  return (
    <LinearGradient
      colors={['#fe8c00', 'yellow', '#fe8c00']}
      style={styles.container}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0.9}}
      locations={[0, 0.3, 0.9]}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
};

const ActionPanel = props => {
  const {navigation} = props;
  const {tableNo} = props.route.params;
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, margin: 5, marginRight: 2.5}}>
        <TouchableHighlight
          style={{height: '100%'}}
          onPress={() => navigation.navigate('PaymentScreen', {tableNo})}>
          <GetButton title="PAYMENT" />
        </TouchableHighlight>
      </View>
      <View style={{flex: 1, margin: 5, marginLeft: 2.5}}>
        <TouchableHighlight
          style={{flex: 1}}
          onPress={() => navigation.navigate('FloorPlanScreen')}>
          <GetButton title="BACK" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    backgroundColor: 'transparent',
    height: 40,
    flex: 1,
    shadowColor: 'black',
    borderWidth: 1,
    borderColor: '#bbb',
    elevation: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    shadowColor: 'black',
    color: 'blue',
  },
});

export default ActionPanel;
