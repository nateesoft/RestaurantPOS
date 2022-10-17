import React, {useState, useEffect} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import {Avatar} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import {SERVER_IP} from '../../../utils/GetIP';

const ListItem = () => {
  const [isLoading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState('');

  const getOrders = async () => {
    try {
      const url = `${SERVER_IP}/api/order/allOrders`;
      const response = await fetch(url);
      const json = await response.json();
      setOrders(json.orders);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const toggleModal = _data => {
    setItemSelect(_data);
    setModalVisible(!isModalVisible);
  };

  const VisibleItem = ({data}) => {
    return (
      <View style={styles.rowFront}>
        <TouchableHighlight
          style={styles.rowFrontVisible}
          underlayColor="orange"
          onPress={() => toggleModal(data.item.productName)}>
          <View style={styles.visibleContainer}>
            <View style={styles.visibleAvatar}>
              <Avatar
                size="48px"
                source={{
                  uri: data.item.productUrl,
                }}
              />
            </View>
            <View style={styles.visibleContainerText}>
              <Text style={styles.title} numberOfLines={2}>
                {data.item.productName}
              </Text>
              {data.item.add_option ? <Text>Options...</Text> : <Text />}
            </View>
            <View style={styles.visibleRight}>
              <Text style={styles.details} numberOfLines={1}>
                {data.item.priceQty}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  const renderItem = (_data, rowMap) => {
    return <VisibleItem data={_data} />;
  };

  const addItemQty = (rowMap, key) => {
    console.log('addItemQty');
  };

  const removeItemQty = (rowMap, key) => {
    console.log('removeItemQty');
  };

  const HiddenItemWithActions = props => {
    const {swipeAnimatedValue, onAddItem, onRemoveItem} = props;
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onRemoveItem}>
          <MaterialCommunityIcons
            name="minus-circle"
            size={25}
            color="white"
            style={styles.trash}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onAddItem}>
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
              name="plus-circle"
              size={25}
              color="white"
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  const rendeHiddenItem = (_data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={_data}
        rowMap={rowMap}
        onAddItem={() => addItemQty(rowMap, _data.item.key)}
        onRemoveItem={() => removeItemQty(rowMap, _data.item.key)}
      />
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <SwipeListView
            data={orders}
            renderItem={renderItem}
            renderHiddenItem={rendeHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-150}
            disableRightSwipe
          />
        </View>
      )}
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInLeft"
        animationInTiming={300}
        style={styles.modalContainer}>
        <View style={styles.modalTopic}>
          <View style={styles.modalContent}>
            <Text style={styles.modalContentText}>
              Item select: {itemSelect}
            </Text>
          </View>
          <View style={styles.modalPaper}>
            <Text>Data 1</Text>
            <Text>Data 2</Text>
            <Text>Data 3</Text>
            <Text>Data 4</Text>
            <Text>Data 5</Text>
          </View>
          <View style={styles.modalFooter}>
            <Button title="Close Modal" onPress={() => toggleModal('')} />
          </View>
        </View>
      </Modal>
    </>
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
    backgroundColor: '#f4f4f4',
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
    backgroundColor: 'red',
    right: 75,
    height: 65,
  },
  backRightBtnRight: {
    backgroundColor: 'green',
    right: 0,
    height: 65,
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
    color: '#123456',
  },
  details: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#123456',
    margin: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  modalContainer: {
    width: 410,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 5,
  },
  modalTopic: {
    flex: 1,
    backgroundColor: 'snow',
    opacity: 0.65,
    justifyContent: 'space-between',
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#123456',
    justifyContent: 'center',
  },
  modalContentText: {color: 'white', textAlign: 'center'},
  modalPaper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalFooter: {flex: 1, justifyContent: 'flex-end'},
  visibleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  visibleAvatar: {flex: 1, justifyContent: 'center'},
  visibleContainerText: {flex: 3, justifyContent: 'center'},
  visibleRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#EAF1FF',
    borderRadius: 15,
    shadowColor: 'orange',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default ListItem;
