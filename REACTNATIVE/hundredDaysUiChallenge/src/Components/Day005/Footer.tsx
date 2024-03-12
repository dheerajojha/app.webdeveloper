import {StyleSheet, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalColors from '../../Constants/GlobalColors';
const {width} = Dimensions.get('window');
const Footer = () => {
  const footerData: string[] = ['home', 'heart', 'scan', 'tag', 'user'];
  return (
    <View style={styles.footerWrapper}>
      {footerData.map((item, index) => (
        <Pressable key={index}>
          <AntIcon name={item} size={20} color={GlobalColors.whiteColor} />
        </Pressable>
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    backgroundColor: GlobalColors.secondryColor,
    width: width * 0.9,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
});
