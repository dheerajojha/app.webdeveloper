/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width} = Dimensions.get('window');
import React from 'react';
import LottieView from 'lottie-react-native';
import GlobalStyles from '../../Constants/GlobalStyles';
import GlobalColors from '../../Constants/GlobalColors';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();
  const onResetHandler = () => {
    navigation.navigate('OnBoarding');
  };
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <View>
        <LottieView
          source={require('../../Assets/Animations/success.json')}
          style={{width: width * 0.9, height: width}}
          autoPlay
          loop
        />
      </View>
      {/* content start */}
      <View style={{alignItems: 'center', gap: 10}}>
        <Text style={GlobalStyles.h1}>Home Page Goes Here</Text>
        <TouchableOpacity style={styles.cta} onPress={onResetHandler}>
          <Text style={{color: GlobalColors.whiteColor}}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeWrapper: {flex: 1, gap: 10},
  cta: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 5,
    fontSize: 16,
    fontWeight: '600',
  },
});
