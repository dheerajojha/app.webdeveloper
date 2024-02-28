/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
  Pressable,
  Touchable,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../Utils/Color';
import {useNavigation} from '@react-navigation/native';
const HealthScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.healthWrapper}>
      <StatusBar backgroundColor="#06919D" />
      <ImageBackground
        source={require('../Assets/Images/healthBg.png')}
        style={styles.backgroundImage}>
        <View style={styles.form}>
          <Text style={styles.h1}>
            HealthCare <Text style={{color: '#06919D'}}>Solution</Text>
          </Text>
          <Text style={styles.h2}>Early Protect For Lovely Health Family</Text>
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Login</Text>
          </Pressable>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text>Don't have an Account?</Text>
            <Pressable onPress={() => navigation.navigate('Health2')}>
              <Text style={{color: '#06919D', fontWeight: '600'}}>Signup</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HealthScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: '600',
    color: Color.blackColor,
    textAlign: 'center',
  },
  h2: {
    fontSize: 22,
    fontWeight: '500',
    color: '#06919D',
    textAlign: 'center',
  },
  healthWrapper: {flex: 1},
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    padding: 20,
    backgroundColor: Color.whiteColor,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cta: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#06919D',
  },
  ctaText: {
    color: Color.whiteColor,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
