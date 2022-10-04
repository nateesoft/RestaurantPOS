import React from 'react';
import {View, Text, Button} from 'react-native';

const PaymentScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Payment Screen</Text>
      <Button
        title="Go to Floor Plane Screen"
        onPress={() => navigation.navigate('FloorPlanScreen')}
      />
    </View>
  );
};

export default PaymentScreen;
