import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import CardFlip from 'react-native-card-flip';

const FlipPage = ({item1, item2}) => {
  return (
    <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card1]}
        onPress={() => this.card.flip()}>
        {item1}
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card2]}
        onPress={() => this.card.flip()}>
        {item2}
      </TouchableOpacity>
    </CardFlip>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 10,
  },
  card: {
    flex: 1,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#ECE2DD',
  },
  card2: {
    backgroundColor: '#FEB12C',
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
