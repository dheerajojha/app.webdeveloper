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

const LoginScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const loginHandler = async () => {
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      showMessage({message: 'user logged in successfully', type: 'success'});
      navigation.navigate('HomeScreen');
      if (result) {
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-credential') {
        showMessage({message: 'invalid-credential', type: 'danger'});
      }
      console.log(error);
    }
  };
  return (
    <>
      <StatusBar backgroundColor={GlobalColors.greenColor} />
      <SafeAreaView style={styles.loginWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../Assets/Images/Day023/log.png')}
            style={{
              width: width,
              height: height / 3,
              objectFit: 'contain',
            }}
          />
        </View>

        {/* form start */}

        <View style={styles.form}>
          <Text style={styles.h1}>Login Account</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={e => setEmail(e)}
            style={[
              styles.input,
              isEmailFocused && {borderColor: GlobalColors.greenColor},
            ]}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => {
              setIsEmailFocused(false);
            }}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={e => setPassword(e)}
            style={[
              styles.input,
              isPasswordFocused && {borderColor: GlobalColors.greenColor},
            ]}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => {
              setIsPasswordFocused(false);
            }}
          />

          <TouchableOpacity style={styles.cta} onPress={loginHandler}>
            <Text style={styles.ctaText}>LOGIN</Text>
          </TouchableOpacity>
          <Text>
            Don't have an Account?{' '}
            <Text
              style={{color: GlobalColors.greenColor, fontWeight: '600'}}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Register Here
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;

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
  loginWrapper: {flex: 1, backgroundColor: GlobalColors.greenColor},
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
