import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ModalAlert from '../../../components/modal';

const People = ({item}) => {
  return (
    <View style={{width: 25}}>
      {item.type === 'M' ? (
        <MaterialCommunityIcons size={25} color="#2469C6" name="face-man" />
      ) : (
        <MaterialCommunityIcons size={25} color="#C220C4" name="face-woman" />
      )}
      {item.call ? (
        <View style={{position: 'absolute', top: 0, left: 0}}>
          <Text style={{color: 'red', fontSize: 22, fontWeight: 'bold'}}>
            !
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const TableInfo = ({item, navigation}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="orange"
      onPress={() => navigation.navigate('PosScreen', {tableNo: item.key})}>
      <View
        style={[
          styles.container,
          {backgroundColor: item.status === 'Check In' ? 'pink' : '#F0D7AD'},
        ]}>
        <Text style={[styles.text, {fontSize: 12}]}>
          {item.title}_C:({item.customerCount})
        </Text>
        {item.waiter ? (
          <Text style={styles.text}>Service: {item.waiter}</Text>
        ) : (
          <></>
        )}
        <Text style={{fontSize: 10, textAlign: 'center'}}>
          Start time: 00.00
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 10,
          }}>
          {item.customer.map((_item, index) => {
            return <People key={_item.key} item={item} />;
          })}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const TablePanel = _props => {
  const {color, tabAt} = _props;
  const [isLoading, setLoading] = useState(true);
  const [tables, setTables] = useState([]);
  const image = {
    uri: 'http://192.168.100.102:9090/api/product/images/bgImage.jpg',
  };

  const getAllTables = async () => {
    try {
      const url = `http://192.168.100.102:9090/api/table/allTables/${tabAt}`;
      const response = await fetch(url);
      const json = await response.json();
      setTables(json);
    } catch (error) {
      console.error('getAllTables', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTables();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{flex: 1}}>
          {/* <ModalAlert show={true} />; */}
          <ImageBackground
            source={image}
            resizeMode="cover"
            imageStyle={{opacity: 0.75}}
            style={{flex: 1, justifyContent: 'center'}}>
            <FlatGrid
              itemDimension={100}
              data={tables}
              renderItem={({item}, index) => (
                <TableInfo
                  key={item.key}
                  item={item}
                  color={color}
                  {..._props}
                />
              )}
            />
          </ImageBackground>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    height: 120,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default TablePanel;
