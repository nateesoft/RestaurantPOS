import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const PaymentType = ({setInputs}) => {
  const [selectCash, setSelectCash] = useState(true);
  const [selectCredit, setSelectCredit] = useState(false);
  const [selectQrCode, setSelectQrCode] = useState(false);
  const [selectTrueWallet, setSelectTrueWallet] = useState(false);
  const [selectPoint, setSelectPoint] = useState(false);

  const selectType = type => {
    if (type === 'cash') {
      setSelectCash(!selectCash);
    }
    if (type === 'credit') {
      setSelectCredit(!selectCredit);
    }
    if (type === 'qrcode') {
      setSelectQrCode(!selectQrCode);
    }
    if (type === 'truewallet') {
      setSelectTrueWallet(!selectTrueWallet);
    }
    if (type === 'point') {
      setSelectPoint(!selectPoint);
    }
  };

  useEffect(() => {
    const manageListType = () => {
      let newInput = [];
      if (selectCash) {
        newInput.push('cash');
      }
      if (selectCredit) {
        newInput.push('credit');
      }
      if (selectQrCode) {
        newInput.push('qrcode');
      }
      if (selectTrueWallet) {
        newInput.push('truewallet');
      }
      if (selectPoint) {
        newInput.push('point');
      }
      if (newInput.length === 0) {
        newInput.push('cash');
        setSelectCash(true);
      }
      setInputs(newInput);
    };

    manageListType();
  }, [selectCash, selectCredit, selectQrCode, selectTrueWallet, selectPoint]);

  const PaymentItem = ({check, text, color}) => {
    return (
      <View style={styles.paymentItem}>
        {check === true ? (
          <View style={styles.paymentItemContainer}>
            <Icons name="check-circle-outline" size={25} color={color} />
          </View>
        ) : (
          <></>
        )}
        <Text style={[styles.paymentText, {color: color}]}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="gray"
        onPress={() => selectType('cash')}
        style={[styles.paymentButtonType, styles.btnCash]}>
        <PaymentItem text="Cash" check={selectCash} color="white" />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="gray"
        onPress={() => selectType('credit')}
        style={[styles.paymentButtonType, styles.btnCredit]}>
        <PaymentItem text="Credit Card" check={selectCredit} color="black" />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="black"
        onPress={() => selectType('qrcode')}
        style={[styles.paymentButtonType, styles.btnQrCode]}>
        <PaymentItem text="Qr Code" check={selectQrCode} color="white" />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="gray"
        onPress={() => selectType('truewallet')}
        style={[styles.paymentButtonType, styles.btnTrueWallet]}>
        <PaymentItem text="True Wallet" check={selectTrueWallet} color="blue" />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="gray"
        onPress={() => selectType('point')}
        style={[styles.paymentButtonType, styles.btnPoint]}>
        <PaymentItem text="Point" check={selectPoint} color="snow" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  paymentButtonType: {
    flex: 1,
  },
  paymentText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnCash: {backgroundColor: 'green'},
  btnCredit: {backgroundColor: 'yellow'},
  btnQrCode: {backgroundColor: 'gray'},
  btnTrueWallet: {backgroundColor: 'orange'},
  btnPoint: {backgroundColor: '#123456'},
  paymentItem: {flex: 1},
  paymentItemContainer: {alignItems: 'flex-end', position: 'absolute'},
});

export default PaymentType;
