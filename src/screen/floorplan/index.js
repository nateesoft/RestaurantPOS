import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import FloorPlanPanel from './components/FloorPlanPanel';
import CardsAds from './components/ContactAds';

const FloorPlaneScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.rightPanel}>
        <FloorPlanPanel {...props} />
      </View>
      <View style={styles.leftPanel}>
        <View style={{flex: 11}}>
          <CardsAds />
        </View>
        <View style={styles.buttonLogout}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="red"
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.textLogout}>LOGOUT</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
  },
  leftPanel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#5A3B0B',
    borderColor: 'gold',
  },
  rightPanel: {
    flex: 11,
  },
  buttonLogout: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF2F5B',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textLogout: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FloorPlaneScreen;
