import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Data from '../data/Item.json';

const NotificationSreen = () => {
  const [listData, setListData] = useState(
    Data.map((item, index) => ({
      key: `${index}`,
      title: item.productName,
      details: item.productName + 'detail',
      url: item.productUrl,
      qty: item.priceQty,
    })),
  );

  const deleteRow = (rowMap, key) => {
    closeRow(rowMap, key);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === key);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const VisibleItem = props => {
    const {data} = props;
    return (
      <View style={styles.rowFront}>
        <TouchableHighlight style={styles.rowFrontVisible}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Avatar
                size="48px"
                source={{
                  uri: data.item.url,
                }}
              />
            </View>
            <View style={{flex: 3, justifyContent: 'center'}}>
              <Text style={[styles.title, {color: '#aaa'}]} numberOfLines={2}>
                {data.item.title}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text
                style={[
                  styles.details,
                  {fontSize: 14, fontWeight: 'bold', color: 'black'},
                ]}
                numberOfLines={1}>
                {data.item.qty}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };

  const closeRow = (rowMap, key) => {
    if (rowMap[key]) {
      rowMap[key].closeRow();
    }
  };

  const HiddenItemWithActions = props => {
    const {swipeAnimatedValue, onClose, onDelete} = props;
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}>
          <MaterialCommunityIcons
            name="close-circle-outline"
            size={25}
            color="white"
            style={styles.trash}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}>
          <Animated.View
            style={[
              styles.trash,
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [-90, -45],
                      outputRange: [1, 0],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={25}
              color="white"
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  const rendeHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={rendeHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 65,
    margin: 1,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 1,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationSreen;
