import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';

import LoginScreen from './src/screen/login';
import FloorPlane from './src/screen/floorplan';
import PosScreen from './src/screen/pos';
import PaymentScreen from './src/screen/payment';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: 'Login Screen', animationTypeForReplace: 'push'}}
          />
          <Stack.Screen
            name="FloorPlanScreen"
            component={FloorPlane}
            options={{
              title: 'Floor Plane Screen',
              animationTypeForReplace: 'pop',
            }}
          />
          <Stack.Screen
            name="PosScreen"
            component={PosScreen}
            options={{
              title: 'PosScreen',
              animation: 'slide_from_right',
              animationTypeForReplace: 'pop',
            }}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{
              title: 'Payment Screen',
              animation: 'slide_from_bottom',
              animationTypeForReplace: 'pop',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
