import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';

import {AuthContext, POSContext} from './src/components/context';
import LoginScreen from './src/screen/login';
import FloorPlane from './src/screen/floorplan';
import PosScreen from './src/screen/pos';
import PaymentScreen from './src/screen/payment';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [useTable, setUseTable] = useState(null);
  const [loading, setLoading] = useState(true);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setUserToken('abc001');
        setLoading(false);
      },
      signOut: () => {
        setUserToken(null);
        setLoading(false);
      },
    }),
    [],
  );

  const posContext = useMemo(
    () => ({
      openTable: tableNo => {
        setUseTable(tableNo);
      },
      holdTable: () => {
        setUseTable(null);
      },
      checkBill: () => {
        setUseTable(null);
      },
    }),
    [],
  );

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthContext.Provider value={authContext}>
          {userToken === null ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  title: 'Login Screen',
                  animationTypeForReplace: 'push',
                }}
              />
            </Stack.Navigator>
          ) : (
            <POSContext.Provider value={posContext}>
              {useTable === null ? (
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}>
                  <Stack.Screen
                    name="FloorPlanScreen"
                    component={FloorPlane}
                    options={{
                      title: 'Floor Plane Screen',
                      animationTypeForReplace: 'pop',
                    }}
                  />
                </Stack.Navigator>
              ) : (
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}>
                  <Stack.Screen
                    name="PosScreen"
                    component={PosScreen}
                    options={{
                      title: 'PosScreen',
                      animation: 'slide_from_right',
                      animationTypeForReplace: 'pop',
                    }}
                    initialParams={{tableNo: useTable}}
                  />
                  <Stack.Screen
                    name="PaymentScreen"
                    component={PaymentScreen}
                    options={{
                      title: 'Payment Screen',
                      animation: 'slide_from_bottom',
                      animationTypeForReplace: 'pop',
                    }}
                    initialParams={{tableNo: useTable}}
                  />
                </Stack.Navigator>
              )}
            </POSContext.Provider>
          )}
        </AuthContext.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
