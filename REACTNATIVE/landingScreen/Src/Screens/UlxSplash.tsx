import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../Utils/Color';
import {useNavigation} from '@react-navigation/native';
const UlxSplash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Ulx');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.ulxSplashWrapper}>
      <Text style={{fontSize: 50, fontWeight: '700', color: Color.whiteColor}}>
        ULX
      </Text>
      <Image
        source={require('../Assets/Images/hand.png')}
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
};

export default UlxSplash;

const styles = StyleSheet.create({
  ulxSplashWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primaryColor,
  },
});
