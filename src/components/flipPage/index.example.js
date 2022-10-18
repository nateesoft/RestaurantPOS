import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import CardFlip from 'react-native-card-flip';

const FlipPage = () => {
  return (
    <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card1]}
        onPress={() => this.card.flip()}>
        <Text style={styles.label}>AB</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card2]}
        onPress={() => this.card.flip()}>
        <View>
          <Text>Topics</Text>
          <Text>Detail</Text>
        </View>
      </TouchableOpacity>
    </CardFlip>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 150,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  card3: {
    backgroundColor: '#123456',
  },
  label: {
    lineHeight: 150,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default FlipPage;
