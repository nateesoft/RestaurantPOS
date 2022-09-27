import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {Text} from 'native-base';
import {FlatGrid} from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';

const CardMenu = ({item, color}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="orange"
      onPress={() => alert('Click Item!(' + item + ')')}>
      <View style={{borderWidth: 1}}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', color ? color : '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.buttonText}>Group</Text>
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
              2
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            height: 80,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <ImageBackground
            source={{uri: 'https://picsum.photos/id/1/200/300'}}
            style={{width: '100%', height: 80, opacity: 0.75}}>
            <Text
              style={{
                color: 'yellow',
                fontWeight: 'bold',
                bottom: 0,
              }}>
              Product 001
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: 'snow',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#123456',
            }}>
            Price: 100$
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const ProductPanel = ({color}) => {
  return (
    <FlatGrid
      itemDimension={130}
      data={[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
      ]}
      renderItem={({item}) => <CardMenu item={item} color={color} />}
    />
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
});

export default ProductPanel;
