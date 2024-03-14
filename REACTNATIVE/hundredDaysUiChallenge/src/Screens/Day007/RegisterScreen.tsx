/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

const RegisterScreen: React.FC = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.loginWrapper}>
      <StatusBar backgroundColor={GlobalColors.primaryColor} />
      <ImageBackground
        source={require('../../Assets/Images/Day007/background.png')}
        style={styles.backgroundImage}>
        <Animated.View entering={FadeInUp.delay(100).duration(400)}>
          <Text style={styles.h1}>REGISTER</Text>
        </Animated.View>
        <View style={styles.lightContainer}>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
            source={require('../../Assets/Images/Day007/light.png')}
          />
          <Animated.Image
            entering={FadeInUp.delay(400).duration(1000).springify().damping(2)}
            source={require('../../Assets/Images/Day007/light.png')}
            style={{height: 160, objectFit: 'contain'}}
          />
        </View>
      </ImageBackground>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Enter your Email" />
        <TextInput style={styles.input} placeholder="Enter your username" />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>Register</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', gap: 5, justifyContent: 'center'}}>
          <Text> Already Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: GlobalColors.primaryColor}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  loginWrapper: {flex: 1, gap: 40},
  h1: {fontSize: 35, fontWeight: '700', color: GlobalColors.whiteColor},

  backgroundImage: {
    flex: 4,
    width: width,
    height: height,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lightContainer: {
    position: 'absolute',
    top: -30,
    flexDirection: 'row',
    gap: 120,
  },
  form: {
    flex: 6,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 13,
    borderRadius: 10,
  },
  cta: {
    backgroundColor: GlobalColors.primaryColor,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    color: GlobalColors.whiteColor,
    fontWeight: '600',
  },
});
