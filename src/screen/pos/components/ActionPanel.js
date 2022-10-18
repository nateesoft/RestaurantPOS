import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {POSContext} from '../../../components/context';

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

const GetBackButton = ({title}) => {
  return (
    <LinearGradient
      colors={['yellow', 'red', 'pink']}
      style={styles.container}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0.9}}
      locations={[0, 0.3, 0.9]}>
      <Text style={styles.textBlack}>{title}</Text>
    </LinearGradient>
  );
};

const ActionPanel = props => {
  const {navigation} = props;
  const {tableNo} = props.route.params;
  const {holdTable} = useContext(POSContext);
  return (
    <View style={styles.actionContainer}>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.buttonBack}
          onPress={() => holdTable()}>
          <GetBackButton title="BACK" />
        </TouchableHighlight>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.buttonPayment}
          onPress={() => navigation.navigate('PaymentScreen', {tableNo})}>
          <GetButton title="PAYMENT" />
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
  textBlack: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    shadowColor: 'black',
    color: 'black',
  },
  actionContainer: {flexDirection: 'row'},
  buttonContainer: {flex: 1, margin: 5, marginRight: 2.5},
  buttonBack: {flex: 1},
  buttonPayment: {height: '100%'},
});

export default ActionPanel;
