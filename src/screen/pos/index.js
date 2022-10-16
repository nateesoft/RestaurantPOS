import React from 'react';
import {StyleSheet, View} from 'react-native';

import ActionPanel from './components/ActionPanel';
import ListItems from './components/ListItems';
import TotalItem from './components/TotalItem';
import TabProductPanel from './components/TabProductPanel';
import ContactAds from './components/ContactAds';

const PosScreen = props => {
  const {tableNo} = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <View style={styles.totalAmount}>
          <TotalItem tableNo={tableNo} netTotalAmount={1000} />
        </View>
        <View style={styles.listItems}>
          <ListItems />
        </View>
        <View style={styles.actionPanel}>
          <ActionPanel {...props} />
        </View>
      </View>
      <View style={styles.rightPanel}>
        <View style={styles.tabPanel}>
          <TabProductPanel />
        </View>
        <View style={styles.marquee}>
          <ContactAds />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPanel: {
    flex: 1,
  },
  totalAmount: {flex: 1},
  listItems: {flex: 9},
  actionPanel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topPanel: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  rightPanel: {flex: 2, backgroundColor: 'steelblue'},
  tabPanel: {flex: 9},
  marquee: {flex: 1, backgroundColor: 'steelblue'},
});

export default PosScreen;
