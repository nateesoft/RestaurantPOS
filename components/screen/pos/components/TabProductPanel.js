import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import ProductPanel from './ProductPanel';
import TabHeaders from '../data/TabHeaders.json';

const TabProductPanel = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(TabHeaders);

  const renderScene = ({route}) => {
    if (route.key === 'a') {
      return <ProductPanel color="" />;
    }
    if (route.key === 'b') {
      return <ProductPanel color="yellow" />;
    }
    if (route.key === 'c') {
      return <ProductPanel color="red" />;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBar}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={props => renderScene(props)}
      onIndexChange={() => setIndex()}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {backgroundColor: '#123456', height: 62, justifyContent: 'center'},
  tabBarIndicator: {backgroundColor: 'yellow'},
});

export default TabProductPanel;
