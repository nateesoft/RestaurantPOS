import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FlatGrid} from 'react-native-super-grid';

import FlipPage from '../../components/flipPage';
import {AuthContext} from '../../components/context';
import '../../../assets/i18n/i18n';

const applications = [
  {name: 'RESTAURANT', version: '1.1.0', desc: 'ร้านอาหาร', color: '#A72306'},
  {name: 'MINIMART', version: '2.0.0', desc: 'ร้านของชำ', color: 'blue'},
  {name: 'INVENTORY', version: '11.5.2', desc: 'คลังสินค้า', color: '#047823'},
  {name: 'INGREDIENT', version: '2.0.5', desc: 'วัตถุดิบ', color: '#50B96C'},
  {name: 'CRM', version: '1.0.2', desc: 'สมาชิก', color: '#3067CF'},
  {name: 'EMPLOYEE', version: '1.5.5', desc: 'พนักงาน', color: '#B540CF'},
  {name: 'POINT', version: '11.5.2', desc: 'คะแนนสะสม', color: '#3067CF'},
  {name: 'PROMOTION', version: '4.1.2', desc: 'โปรโมชัน', color: '#0D9B96'},
  {name: 'QUE SYSTEM', version: '4.1.2', desc: 'ระบบคิว', color: '#BB477C'},
  {name: 'REPORT', version: '1.8.0', desc: 'รายงาน', color: '#3067CF'},
  {name: 'CHAT', version: '1.0.0', desc: 'คุยงาน', color: '#11A408'},
  {name: 'SETTINGS', version: '3.0.0', desc: 'ตั้งค่าระบบ', color: '#123456'},
];

const LoginScreen = () => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState('en');
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const {signIn} = useContext(AuthContext);
  const AppComponents = ({name, desc, version, color}) => {
    return (
      <TouchableHighlight
        underlayColor="#123456"
        onPress={() => console.log('select app:', name)}
        style={[styles.appCard, {backgroundColor: color}]}>
        <>
          <Text style={{color: 'pink', fontSize: 14}}>{desc}</Text>
          <Text style={styles.appText}>{name}</Text>
          <Text style={styles.appVersionText}>{version}</Text>
        </>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.allApps}>
        <View style={styles.posPlatform}>
          <Text style={styles.posHeaderText}>POS PLATFORM</Text>
        </View>
        <FlipPage
          item1={
            <View style={styles.appContainer}>
              <FlatGrid
                itemDimension={130}
                data={applications}
                renderItem={({item}) => (
                  <AppComponents
                    name={item.name}
                    desc={item.desc}
                    version={item.version}
                    color={item.color}
                  />
                )}
              />
            </View>
          }
          item2={<Text>Page-2</Text>}
        />
      </View>
      <View style={styles.loginContainer}>
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
        <Button title="Login to System (2022)" onPress={() => signIn()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer: {
    flex: 8,
    flexDirection: 'row',
    padding: 10,
  },
  allApps: {
    flex: 2,
    backgroundColor: 'snow',
  },
  loginContainer: {
    flex: 1,
  },
  appCard: {
    height: 150,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  appVersionText: {
    color: 'yellow',
    fontWeight: 'bold',
  },
  posPlatform: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D1D50E',
  },
  posHeaderText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});

export default LoginScreen;
