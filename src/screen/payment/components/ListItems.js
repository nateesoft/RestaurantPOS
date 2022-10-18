import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from 'react-native';

import {SERVER_IP} from '../../../utils/GetIP';

const ListItem = () => {
  const [isLoading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

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

  const ProductItem = ({index, name, qty}) => (
    <View style={styles.item}>
      <Text style={[styles.title, styles.itemIndex]}>{index}</Text>
      <Text numberOfLines={4} style={[styles.title, styles.itemName]}>
        {name}
      </Text>
      <Text style={[styles.title, styles.itemQty]}>{qty}</Text>
    </View>
  );

  const renderItem = props => {
    const {index, item} = props;
    const {productName, priceQty} = item;
    return <ProductItem index={index + 1} name={productName} qty={priceQty} />;
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={item => item.index}
          />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5,
  },
  title: {
    fontSize: 22,
  },
  itemIndex: {flex: 1, textAlign: 'center'},
  itemName: {flex: 5},
  itemQty: {flex: 2, textAlign: 'right'},
});

export default ListItem;
