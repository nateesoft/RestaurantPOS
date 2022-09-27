import {Spacer} from 'native-base';
import React from 'react';
import {View, Text, Button} from 'react-native';

const FloorPlaneScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Floor Plan Screen</Text>
      <View style={{margin: 20, padding: 10}}>
        <View style={{margin: 5}}>
          <Button
            title="OPEN TABLE 1"
            onPress={() => navigation.navigate('PosScreen')}
            color="green"
          />
        </View>
        <View style={{margin: 5}}>
          <Button
            title="OPEN TABLE 2"
            onPress={() => navigation.navigate('PosScreen')}
            color="green"
          />
        </View>
      </View>
      <View>
        <Button
          title="LOGOUT SYSTEM"
          onPress={() => navigation.navigate('LoginScreen')}
          color="red"
        />
      </View>
    </View>
  );
};

export default FloorPlaneScreen;
