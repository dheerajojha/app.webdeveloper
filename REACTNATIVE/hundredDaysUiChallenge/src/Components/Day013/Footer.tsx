import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalColors from '../../Constants/GlobalColors';
import GlobalStyles from '../../Constants/GlobalStyles';
const {width, height} = Dimensions.get('window');

const Footer: React.FC = () => {
  const iconData: string[] = ['home', 'heart', 'message1', 'phone'];
  const [iconActive, setIconActive] = useState<boolean>(false);
  return (
    <View style={[GlobalStyles.flexBetween, styles.footerWrapper]}>
      {iconData.map((item, index) => (
        <TouchableOpacity
          onPress={() => setIconActive(!iconActive)}
          key={index}
          style={styles.iconContainer}>
          <AntIcon name={item} size={24} color={'black'} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerWrapper: {
    width: width * 0.7,
    height: height * 0.08,
    position: 'absolute',
    bottom: 15,
    left: 60,
    backgroundColor: GlobalColors.whiteColor,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  iconContainer: {
    backgroundColor: GlobalColors.grayColor,
    padding: 10,
    borderRadius: 30,
  },
});
