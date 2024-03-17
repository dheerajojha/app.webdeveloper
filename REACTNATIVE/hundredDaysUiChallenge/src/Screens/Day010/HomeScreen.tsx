/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import GlobalStyles from '../../Constants/GlobalStyles';
const {width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const getDate = () => {
    const d = new Date();
    const hours: number = d.getHours() % 12;
    let minutes: number | string = d.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const date: string = `${hours}:${minutes}`;
    return date;
  };
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <SafeAreaView style={styles.homeWrapper}>
        <ImageBackground
          source={require('../../Assets/Images//Day010/bg.jpg')}
          style={styles.imageBackground}>
          <Text style={styles.h1}>{getDate()}</Text>
          <Animated.View
            entering={FadeInLeft.duration(1000).delay(1000)}
            style={styles.notificationContainer}>
            <Text style={{alignSelf: 'flex-end'}}>Now</Text>
            <View style={GlobalStyles.flexRow}>
              <Image
                source={require('../../Assets/Images/Day010/instagram.png')}
                style={{width: 50, height: 50}}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: GlobalColors.blackColor}}>
                  Instagram
                </Text>
                <Text style={{color: GlobalColors.blackColor, fontSize: 16}}>
                  Notification
                </Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            entering={FadeInLeft.duration(1000).delay(2000)}
            style={styles.notificationContainer}>
            <Text style={{alignSelf: 'flex-end'}}>1 Sec Ago</Text>
            <View style={GlobalStyles.flexRow}>
              <Image
                source={require('../../Assets/Images/Day010/instagram.png')}
                style={{width: 50, height: 50}}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: GlobalColors.blackColor}}>
                  Instagram
                </Text>
                <Text style={{color: GlobalColors.blackColor, fontSize: 16}}>
                  Notification
                </Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            entering={FadeInLeft.duration(1000).delay(3000)}
            style={styles.notificationContainer}>
            <Text style={{alignSelf: 'flex-end'}}>2 Sec Ago</Text>
            <View style={GlobalStyles.flexRow}>
              <Image
                source={require('../../Assets/Images/Day010/instagram.png')}
                style={{width: 50, height: 50}}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: GlobalColors.blackColor}}>
                  Instagram
                </Text>
                <Text style={{color: GlobalColors.blackColor, fontSize: 16}}>
                  Notification
                </Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            entering={FadeInLeft.duration(1000).delay(4000)}
            style={styles.notificationContainer}>
            <Text style={{alignSelf: 'flex-end'}}>3 Sec Ago</Text>
            <View style={GlobalStyles.flexRow}>
              <Image
                source={require('../../Assets/Images/Day010/instagram.png')}
                style={{width: 50, height: 50}}
              />
              <View>
                <Text
                  style={{fontWeight: '600', color: GlobalColors.blackColor}}>
                  Instagram
                </Text>
                <Text style={{color: GlobalColors.blackColor, fontSize: 16}}>
                  Notification
                </Text>
              </View>
            </View>
          </Animated.View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWrapper: {flex: 1},
  h1: {fontSize: 60, color: GlobalColors.whiteColor, fontWeight: '700'},
  imageBackground: {flex: 1, alignItems: 'center', paddingTop: 70, gap: 20},
  notificationContainer: {
    backgroundColor: GlobalColors.whiteColor,
    width: width * 0.9,
    height: width * 0.3,
    borderRadius: 10,
    padding: 13,
  },
});
