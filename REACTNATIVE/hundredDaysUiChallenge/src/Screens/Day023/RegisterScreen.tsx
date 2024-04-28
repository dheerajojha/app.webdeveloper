/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import GlobalColors from '../../Constants/GlobalColors';
const {height, width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const RegisterScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const registerHandler = async () => {
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (result) {
        showMessage({
          message: 'User account created Successfully',
          type: 'success',
        });
        navigation.navigate('LoginScreen');
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        showMessage({
          message: 'That email address is already in use!',
          type: 'danger',
        });
      }
      if (error.code === 'auth/invalid-email') {
        showMessage({
          message: 'That email address is invalid!',
          type: 'danger',
        });
      }
      if (error.code === 'auth/weak-password') {
        showMessage({
          message: 'Password should be at least 6 characters',
          type: 'danger',
        });
      }
      console.log(error);
    }
  };
  return (
    <>
      <StatusBar backgroundColor={GlobalColors.greenColor} />
      <SafeAreaView style={styles.registerWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../Assets/Images/Day023/reg.png')}
            style={{
              width: width,
              height: height / 3,
              objectFit: 'contain',
            }}
          />
        </View>

        {/* form start */}

        <View style={styles.form}>
          <Text style={styles.h1}>Create New Account</Text>
          <TextInput
            placeholder="Email"
            style={[
              styles.input,
              isEmailFocused && {borderColor: GlobalColors.greenColor},
            ]}
            onChangeText={(text: any) => setEmail(text)}
            value={email}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => {
              setIsEmailFocused(false);
            }}
          />

          <TextInput
            placeholder="Password"
            style={[
              styles.input,
              isPasswordFocused && {borderColor: GlobalColors.greenColor},
            ]}
            onChangeText={(text: any) => setPassword(text)}
            value={password}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => {
              setIsPasswordFocused(false);
            }}
          />

          <TouchableOpacity style={styles.cta} onPress={registerHandler}>
            <Text style={styles.ctaText}>REGISTER</Text>
          </TouchableOpacity>
          <Text>
            Already have an Account?{' '}
            <Text
              style={{color: GlobalColors.greenColor, fontWeight: '600'}}
              onPress={() => navigation.navigate('LoginScreen')}>
              Login Here
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: '600',
    color: GlobalColors.blackColor,
    backgroundColor: GlobalColors.grayColor,
    width: '100%',
    textAlign: 'center',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 20,
  },
  registerWrapper: {flex: 1, backgroundColor: GlobalColors.greenColor},
  imageContainer: {flex: 1, backgroundColor: GlobalColors.greenColor},
  form: {
    flex: 1.5,
    backgroundColor: GlobalColors.whiteColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    gap: 25,
  },
  input: {
    borderColor: GlobalColors.grayColor,
    borderWidth: 1,
    width: '90%',
    padding: 15,
    borderRadius: 5,
  },

  cta: {
    backgroundColor: GlobalColors.greenColor,
    width: '90%',
    padding: 20,
    borderRadius: 30,
  },
  ctaText: {
    textAlign: 'center',
    color: GlobalColors.whiteColor,
    fontWeight: '500',
    letterSpacing: 5,
  },
});
