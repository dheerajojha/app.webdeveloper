/* eslint-disable react-native/no-inline-styles */
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../../Utils/Color';
import {useNavigation} from '@react-navigation/native';
const SplashScreen = () => {
  const navigation: any = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.splashWrapper}>
      <ImageBackground
        source={require('../../Assets/Images/splash.jpg')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.h1}>Travel</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashWrapper: {flex: 1},
  h1: {
    fontSize: 40,
    fontWeight: '700',
    color: Color.blackColor,
    fontStyle: 'italic',
  },
});
