import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalColors from '../../Constants/GlobalColors';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
const ProductHeader = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.productHeaderWrapper}>
      <View style={GlobalStyles.flexRow}>
        <AntIcon
          name="left"
          size={20}
          color={GlobalColors.whiteColor}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.h1}>Details</Text>
      </View>
      <AntIcon name="notification" size={20} color={GlobalColors.whiteColor} />
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  productHeaderWrapper: {
    padding: 10,
    backgroundColor: GlobalColors.bgColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: {fontSize: 24, fontWeight: '600', color: GlobalColors.whiteColor},
});
