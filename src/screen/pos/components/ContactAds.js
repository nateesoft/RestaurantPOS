import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MarqueeText from 'react-native-marquee';

const ContactAds = () => {
  return (
    <View style={styles.container}>
      <MarqueeText
        style={styles.text}
        speed={1}
        marqueeOnStart={true}
        loop={true}
        delay={1000}>
        <Text>*** ( Support 24/7 ) ***</Text>
        <Text style={styles.textRed}>
          ...#ถ้าพบปัญหาแจ้งได้ที่ 086-4108403...
        </Text>
        <Text style={styles.textOrange}>ดูแลตลอด 24 ชั่วโมง ทุกวัน ^^</Text>
      </MarqueeText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2756B3',
    opacity: 0.85,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'yellow',
    textShadowColor: '#123456',
    textShadowOffset: {width: 1, height: 3},
    textShadowRadius: 5,
  },
  textRed: {color: 'red'},
  textOrange: {color: 'orange'},
});

export default ContactAds;
