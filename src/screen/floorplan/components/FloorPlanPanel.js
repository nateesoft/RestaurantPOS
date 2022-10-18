import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TablePanel from './TablePanel';
import tabData from '../data/TabHeaders.json';

const FloorPlan = props => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(tabData);

  const renderScene = ({route}) => {
    let color = 'green';
    if (route.key === 'A') {
      color = 'red';
    } else if (route.key === 'B') {
      color = 'yellow';
    } else if (route.key === 'C') {
      color = 'blue';
    }
    return (
      <View style={styles.container}>
        <TablePanel {...props} color={color} tabAt={route.key} />
      </View>
    );
  };

  const renderTabBar = _props => (
    <TabBar
      {..._props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBar}
      renderIcon={() => (
        <View style={styles.imageTabBar}>
          <MaterialCommunityIcons
            name="dice-4-outline"
            color="#bbb"
            size={25}
          />
        </View>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={_props => renderScene(_props)}
      onIndexChange={() => setIndex()}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#643D01',
    height: 62,
    justifyContent: 'center',
    borderWidth: 1,
  },
  tabBarIndicator: {
    backgroundColor: 'red',
  },
  imageTabBar: {margin: -3},
});

export default FloorPlan;
