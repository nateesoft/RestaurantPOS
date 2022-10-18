import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const InputPayment = props => {
  const {
    inputs,
    setInput,
    cashAmount,
    creditAmount,
    qrAmount,
    trueAmount,
    pointAmount,
    tonAmount,
  } = props;

  const GetInputComponent = ({type}) => {
    if (type === 'cash') {
      return (
        <>
          <Text style={styles.text}>CASH:</Text>
          <TextInput
            style={styles.input}
            value={cashAmount}
            onFocus={() => setInput('cash')}
            showSoftInputOnFocus={false}
            keyboardType="numeric"
          />
        </>
      );
    } else if (type === 'credit') {
      return (
        <>
          <Text style={styles.text}>CREDIT CARD:</Text>
          <TextInput
            style={styles.input}
            value={creditAmount}
            onFocus={() => setInput('credit')}
            showSoftInputOnFocus={false}
            keyboardType="numeric"
          />
        </>
      );
    } else if (type === 'qrcode') {
      return (
        <>
          <Text style={styles.text}>QR CODE:</Text>
          <TextInput
            style={styles.input}
            value={qrAmount}
            onFocus={() => setInput('qrcode')}
            showSoftInputOnFocus={false}
            keyboardType="numeric"
          />
        </>
      );
    } else if (type === 'truewallet') {
      return (
        <>
          <Text style={styles.text}>TRUE WALLET:</Text>
          <TextInput
            style={styles.input}
            value={trueAmount}
            onFocus={() => setInput('truewallet')}
            showSoftInputOnFocus={false}
            keyboardType="numeric"
          />
        </>
      );
    } else if (type === 'point') {
      return (
        <>
          <Text style={styles.text}>POINT:</Text>
          <TextInput
            style={styles.input}
            value={pointAmount}
            onFocus={() => setInput('point')}
            showSoftInputOnFocus={false}
            keyboardType="numeric"
          />
        </>
      );
    } else if (type === 'ton') {
      return (
        <>
          <Text style={styles.text}>TON:</Text>
          <TextInput
            style={styles.textDisabled}
            value={tonAmount}
            showSoftInputOnFocus={false}
            keyboardType="numeric"
            editable={false}
          />
        </>
      );
    }

    return <></>;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {inputs.map((item, index) => (
            <GetInputComponent key={index} type={item} />
          ))}
          <GetInputComponent type="ton" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    height: 100,
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
    borderRadius: 10,
  },
  textDisabled: {
    height: 100,
    borderWidth: 1,
    backgroundColor: '#ccc',
    fontSize: 48,
    textAlign: 'right',
    padding: 20,
    borderRadius: 10,
  },
});

export default InputPayment;
