/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import EntIcon from 'react-native-vector-icons/Entypo';
import GlobalStyles from '../../Constants/GlobalStyles';
const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Image
        source={require('../../Assets/Images/Day005/user.png')}
        style={{width: 60, height: 60}}
      />
      <View style={GlobalStyles.flexRow}>
        <EntIcon
          name="location-pin"
          color={GlobalColors.whiteColor}
          size={20}
        />
        <Text style={styles.h3}>Toronto</Text>
      </View>
      <EntIcon name="notification" color={GlobalColors.whiteColor} size={20} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  h3: {fontSize: 20, fontWeight: '600', color: GlobalColors.whiteColor},
  headerWrapper: {
    backgroundColor: GlobalColors.bgColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});
