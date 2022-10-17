import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  View,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {SERVER_IP} from '../../../utils/GetIP';

const ProductPanel = ({color, tabAt}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemSelect, setItemSelect] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      const url = `${SERVER_IP}/api/product/allGroups/${tabAt}`;
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const toggleModal = data => {
    setItemSelect(data);
    setModalVisible(!isModalVisible);
  };

  const updateSelectProduct = productId => {
    const newProduct = products.map(product => ({
      ...product,
      qty: product.id === productId ? product.qty + 1 : product.qty,
    }));
    setProducts(newProduct);
  };

  const updateRemoveProduct = productId => {
    const newProduct = products.map(product => ({
      ...product,
      qty: product.id === productId ? product.qty - 1 : product.qty,
    }));
    setProducts(newProduct);
  };

  const CardMenu = ({item, onAdd, onRemove}) => {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="orange"
        onPress={() => onAdd()}>
        <View style={styles.cardMenuContainer}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 0.5, 0.6]}
            colors={['#4c669f', color ? color : '#3b5998', '#192f6a']}
            style={styles.linearGradient}>
            <View style={styles.cardMenuGroup}>
              <Text style={styles.buttonText}>{item.productGroup}</Text>
              {item.qty ? (
                <Text
                  style={
                    ([styles.buttonText],
                    {
                      backgroundColor: 'orange',
                      width: 20,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    })
                  }>
                  {item.qty}
                </Text>
              ) : (
                <></>
              )}
            </View>
          </LinearGradient>
          <View style={styles.cardMenuContent}>
            <ImageBackground
              source={{uri: item.productUrl}}
              style={styles.cardMenuFooterImage}>
              <Text style={styles.cardMenuText} />
              {item.qty ? (
                <TouchableHighlight
                  underlayColor="orange"
                  onPress={() => onRemove(item.id)}>
                  <MaterialCommunityIcons
                    name="minus-circle"
                    size={35}
                    color="red"
                  />
                </TouchableHighlight>
              ) : (
                <></>
              )}
            </ImageBackground>
          </View>
          <View style={styles.cardMenuFooter}>
            <Text
              style={
                styles.cardMenuFooterText
              }>{`${item.productName}: ${item.price} $`}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatGrid
          itemDimension={130}
          data={products}
          renderItem={({item}) => (
            <CardMenu
              item={item}
              onAdd={() => updateSelectProduct(item.id)}
              onRemove={() => updateRemoveProduct(item.id)}
            />
          )}
        />
      )}
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationInTiming={300}
        style={styles.modalContainer}>
        <View style={styles.modalPanel}>
          <View style={styles.modalContent}>
            <Text style={styles.modalDetail1}>Item select: {itemSelect}</Text>
          </View>
          <View style={styles.modalItem}>
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
  product: {
    height: 90,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  modalContainer: {
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 5,
  },
  modalPanel: {
    flex: 1,
    backgroundColor: 'snow',
    justifyContent: 'space-between',
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'chocolate',
    justifyContent: 'center',
  },
  modalDetail1: {color: 'white', textAlign: 'center', fontSize: 22},
  modalItem: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalFooter: {flex: 1, justifyContent: 'flex-end'},
  cardMenuContainer: {borderWidth: 1, borderRadius: 5, borderColor: 'gold'},
  cardMenuGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardMenuContent: {
    height: 120,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  cardMenuText: {
    color: 'yellow',
    fontWeight: 'bold',
    bottom: 0,
  },
  cardMenuFooter: {
    backgroundColor: 'snow',
    justifyContent: 'center',
  },
  cardMenuFooterText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#123456',
  },
  cardMenuFooterImage: {width: '100%', height: 120},
});

export default ProductPanel;
