import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import ListItem from './components/ListItems';
import PaymentType from './components/PaymentType';
import InputPayment from './components/InputPayment';
import Numpad from './components/Numpad';

const BillHeader = ({tableNo}) => {
  return (
    <View style={styles.billContainer}>
      <Text style={styles.textHeader}>Bill order from table: {tableNo}</Text>
      <Text style={styles.textBillTotal}>1,250.00</Text>
    </View>
  );
};

const InputPaymentPanel = props => {
  const {
    inputs,
    cashAmount,
    creditAmount,
    qrAmount,
    trueAmount,
    otherAmount,
    tonAmount,
    input,
    setInput,
    setCashAmount,
    setCreditAmount,
    setQrAmount,
    setTrueAmount,
    setOtherAmount,
  } = props;
  return (
    <View style={styles.inputPaymentContainer}>
      <View style={styles.inputPaymnent1}>
        <InputPayment
          inputs={inputs}
          cashAmount={cashAmount}
          creditAmount={creditAmount}
          qrAmount={qrAmount}
          trueAmount={trueAmount}
          otherAmount={otherAmount}
          tonAmount={tonAmount}
          setInput={setInput}
        />
      </View>
      <View style={styles.numpadContainer}>
        <Numpad
          input={input}
          setCashAmount={setCashAmount}
          setCreditAmount={setCreditAmount}
          setQrAmount={setQrAmount}
          setTrueAmount={setTrueAmount}
          setOtherAmount={setOtherAmount}
        />
      </View>
    </View>
  );
};

const ActionPanel = ({navigation, tableNo}) => {
  return (
    <View style={styles.actionContainer}>
      <View style={styles.buttonBack}>
        <TouchableHighlight
          underlayColor="red"
          onPress={() => navigation.navigate('PosScreen', {tableNo})}>
          <Text style={styles.buttonBack2}>BACK</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.confirmContainer}>
        <TouchableHighlight
          underlayColor="blue"
          onPress={() => navigation.navigate('FloorPlanScreen')}>
          <Text style={styles.buttonConfirm}>CONFIRM</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const PaymentScreen = props => {
  const {tableNo} = props.route.params;
  const [inputs, setInputs] = useState(['cash']);
  const [input, setInput] = useState('cash');
  const [cashAmount, setCashAmount] = useState('0.00');
  const [creditAmount, setCreditAmount] = useState('0.00');
  const [qrAmount, setQrAmount] = useState('0.00');
  const [trueAmount, setTrueAmount] = useState('0.00');
  const [otherAmount, setOtherAmount] = useState('0.00');
  const [tonAmount, setTonAmount] = useState('0.00');

  useEffect(() => {
    console.log('select new input');
  }, [input]);

  return (
    <View style={styles.container}>
      <View style={styles.tabOrder}>
        <View style={{flex: 1}}>
          <BillHeader tableNo={tableNo} />
          <View style={{flex: 8}}>
            <ListItem />
          </View>
        </View>
      </View>
      <View style={styles.tabPayment}>
        <PaymentType setInputs={setInputs} />
        <InputPaymentPanel
          inputs={inputs}
          cashAmount={cashAmount}
          creditAmount={creditAmount}
          qrAmount={qrAmount}
          trueAmount={trueAmount}
          otherAmount={otherAmount}
          tonAmount={tonAmount}
          input={input}
          setInput={setInput}
          setCashAmount={setCashAmount}
          setCreditAmount={setCreditAmount}
          setQrAmount={setQrAmount}
          setTrueAmount={setTrueAmount}
          setOtherAmount={setOtherAmount}
        />
        <ActionPanel tableNo={tableNo} {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  tabOrder: {
    flex: 4,
    backgroundColor: 'snow',
  },
  tabPayment: {
    flex: 10,
    flexDirection: 'column',
  },
  buttonBack: {
    flex: 2,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'snow',
    borderRadius: 20,
    backgroundColor: 'red',
  },
  buttonConfirm: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  confirmContainer: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 20,
  },
  actionContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billContainer: {
    flex: 1.5,
    backgroundColor: 'pink',
  },
  textHeader: {
    fontSize: 22,
    textAlign: 'center',
  },
  textBillTotal: {
    marginTop: 5,
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  inputPaymentContainer: {
    flex: 10,
    flexDirection: 'row',
  },
  inputPaymnent1: {
    flex: 1,
  },
  numpadContainer: {
    flex: 1,
    backgroundColor: 'snow',
  },
  buttonBack2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
});

export default PaymentScreen;
