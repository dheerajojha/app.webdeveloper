/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import GlobalColors from '../../Constants/GlobalColors';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const OnBoarding: React.FC = () => {
  const navigation: any = useNavigation();
  const {width} = Dimensions.get('window');
  const onDoneHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.onBoardingWrapper}>
      <Onboarding
        onDone={onDoneHandler}
        containerStyles={{paddingHorizontal: 10}}
        pages={[
          {
            backgroundColor: '#a7f3da',
            image: (
              <View>
                <LottieView
                  source={require('../../Assets/Animations/man.json')}
                  loop
                  autoPlay
                  style={{width: width * 0.9, height: width}}
                />
              </View>
            ),
            title: 'Boost Productivity',
            subtitle: 'Subscribe to this Channel to Boost Productivity',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View>
                <LottieView
                  source={require('../../Assets/Animations/work.json')}
                  loop
                  autoPlay
                  style={{width: width * 0.9, height: width}}
                />
              </View>
            ),
            title: 'Work Seamlessly',
            subtitle: 'Get Your Work Done Seamlessly without interruption',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View>
                <LottieView
                  source={require('../../Assets/Animations/achieve.json')}
                  loop
                  autoPlay
                  style={{width: width * 0.9, height: width}}
                />
              </View>
            ),
            title: 'Achieve Seamlessly',
            subtitle: 'Get Your Work Done Seamlessly Acheve',
          },
        ]}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  onBoardingWrapper: {flex: 1, backgroundColor: GlobalColors.whiteColor},
});
