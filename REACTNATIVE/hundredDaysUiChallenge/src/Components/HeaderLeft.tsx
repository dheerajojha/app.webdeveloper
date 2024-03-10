/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, SafeAreaView, Image, StatusBar} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalColors from '../Constants/GlobalColors';
const HeaderLeft = () => {
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <StatusBar backgroundColor={GlobalColors.primaryColor} />
      <AntIcon name="left" size={20} color={GlobalColors.whiteColor} />
      <Image
        source={require('../Assets/Images/Day3/me.png')}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: GlobalColors.primaryColor,
  },
  image: {
    width: 30,
    height: 30,
    borderColor: GlobalColors.whiteColor,
    borderWidth: 1,
    borderRadius: 30,
  },
});
