import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

import '../../../assets/i18n/i18n';

const LoginScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen-test</Text>
      <Text>{t('hello')} </Text>
      <Text>{t('this line is translated')}</Text>
      <Pressable
        onPress={() => changeLanguage('en')}
        style={{
          backgroundColor: currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
          padding: 20,
        }}>
        <Text>Select English</Text>
      </Pressable>
      <Pressable
        onPress={() => changeLanguage('th')}
        style={{
          backgroundColor: currentLanguage === 'th' ? '#33A850' : '#d3d3d3',
          padding: 20,
        }}>
        <Text>เลือกภาษาไทย</Text>
      </Pressable>
      <Button
        title="Login to System (2022)"
        onPress={() => navigation.navigate('FloorPlanScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
