import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const TopPanel = ({changeTab}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <ScrollView horizontal={true}>
          <View style={styles.group}>
            <TouchableOpacity onPress={() => changeTab(0)}>
              <Text style={styles.groupText}>Group 1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <TouchableOpacity onPress={() => changeTab(1)}>
              <Text style={styles.groupText}>Group 2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <TouchableOpacity onPress={() => changeTab(2)}>
              <Text style={styles.groupText}>Group 3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <TouchableOpacity onPress={() => changeTab(3)}>
              <Text style={styles.groupText}>Group 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.group}>
            <TouchableOpacity onPress={() => changeTab(4)}>
              <Text style={styles.groupText}>Group 5</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabs: {
    flex: 4,
    justifyContent: 'center',
  },
  search: {
    flex: 2,
    backgroundColor: '#1D72B4',
    borderWidth: 1,
    borderColor: 'white',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1D72B4',
    borderWidth: 1,
    borderColor: 'white',
  },
  group: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    width: 120,
    margin: 1,
    borderWidth: 1,
    borderColor: 'blue',
  },
  groupText: {textAlign: 'center', fontWeight: 'bold', fontSize: 20},
});

export default TopPanel;
