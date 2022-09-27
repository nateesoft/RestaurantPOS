import React from 'react';
import {View, Text, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button
        title="Login to System"
        onPress={() => navigation.navigate('FloorPlanScreen')}
      />
    </View>
  );
};

export default LoginScreen;
