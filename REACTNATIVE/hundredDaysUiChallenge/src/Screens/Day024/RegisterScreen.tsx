/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const RegisterScreen = () => {
  const navigation: any = useNavigation();
  return (
    <>
      <StatusBar
        backgroundColor={GlobalColors.whiteColor}
        barStyle={'dark-content'}
      />
      <View style={styles.registerWrapper}>
        {/* image start */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://img.veenaworld.com/wp-content/uploads/2022/03/10-places-you-need-to-visit-this-summer-in-India-scaled.jpg',
            }}
            style={styles.image}
          />
          <View style={styles.absoluteText}>
            <Text style={styles.h1}>Sign Up</Text>
            <Text style={styles.h1}>Options</Text>
          </View>
        </View>

        {/* buttons start */}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.cta}>
            <AntIcon name="mail" size={22} color={GlobalColors.whiteColor} />
            <Text style={styles.ctaText}>Connect with Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.cta, {backgroundColor: GlobalColors.tertiaryColor}]}>
            <AntIcon name="google" size={22} color={GlobalColors.blackColor} />
            <Text style={[styles.ctaText, {color: GlobalColors.blackColor}]}>
              Sign Up with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.cta, {backgroundColor: GlobalColors.tertiaryColor}]}>
            <FontIcon
              name="facebook-f"
              size={22}
              color={GlobalColors.blackColor}
            />
            <Text style={[styles.ctaText, {color: GlobalColors.blackColor}]}>
              Sign Up with Facebook
            </Text>
          </TouchableOpacity>

          <Text style={{textAlign: 'center'}}>
            Already have an Account?{' '}
            <Text
              style={{color: GlobalColors.primaryColor, fontWeight: '600'}}
              onPress={() => navigation.navigate('LoginScreen')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    color: GlobalColors.whiteColor,
    fontWeight: '600',
    letterSpacing: 8,
  },
  registerWrapper: {
    padding: 10,
    flex: 1,
    gap: 20,
    backgroundColor: GlobalColors.whiteColor,
  },
  image: {width: width * 0.95, height: height / 1.59, borderRadius: 20},
  imageContainer: {
    flex: 2,
  },
  absoluteText: {position: 'absolute', bottom: 30, left: 20},
  buttons: {flex: 1, gap: 20},
  cta: {
    backgroundColor: GlobalColors.primaryColor,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  ctaText: {
    color: GlobalColors.whiteColor,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 17,
  },
});
