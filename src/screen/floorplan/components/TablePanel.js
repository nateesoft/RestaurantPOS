import React, {useState, useEffect, useContext} from 'react';
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

import {POSContext} from '../../../components/context';
import {SERVER_IP} from '../../../utils/GetIP';

const People = ({item}) => {
  return (
    <View style={styles.peopleContainer}>
      {item.type === 'M' ? (
        <MaterialCommunityIcons size={25} color="#2469C6" name="face-man" />
      ) : (
        <MaterialCommunityIcons size={25} color="#C220C4" name="face-woman" />
      )}
      {item.call ? (
        <View style={styles.peopleView}>
          <Text style={styles.peopleCall}>!</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const TableInfo = ({item}) => {
  const {openTable} = useContext(POSContext);
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="orange"
      onPress={() => openTable(item.key)}>
      <View style={[styles.container, styles.tableInfo(item)]}>
        <Text style={[styles.text, styles.textCustomer]}>
          {item.title}_C:({item.customerCount})
        </Text>
        {item.waiter ? (
          <Text style={styles.text}>Service: {item.waiter}</Text>
        ) : (
          <></>
        )}
        <Text style={styles.textTime}>Start time: 00.00</Text>
        <View style={styles.peopleList}>
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
    uri: `${SERVER_IP}/api/product/images/bgImage.jpg`,
  };

  const getAllTables = async () => {
    try {
      const url = `${SERVER_IP}/api/table/allTables/${tabAt}`;
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
        <View style={styles.tableContainer}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
            style={styles.imageBackground}>
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
  tableContainer: {flex: 1},
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
  imageBackground: {flex: 1, justifyContent: 'center'},
  imageStyle: {opacity: 0.75},
  peopleContainer: {width: 25},
  peopleView: {position: 'absolute', top: 0, left: 0},
  peopleCall: {color: 'red', fontSize: 22, fontWeight: 'bold'},
  tableInfo: item => ({
    backgroundColor: item.status === 'Check In' ? 'pink' : '#F0D7AD',
  }),
  textCustomer: {fontSize: 12},
  textTime: {fontSize: 10, textAlign: 'center'},
  peopleList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
});

export default TablePanel;
