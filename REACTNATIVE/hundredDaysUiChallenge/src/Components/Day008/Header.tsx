import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalColors from '../../Constants/GlobalColors';
import {useNavigation} from '@react-navigation/native';
const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <View>
        <Text style={styles.h3}>Welcome</Text>
        <Text style={styles.h1}>Find Your Course</Text>
      </View>
      <View style={styles.iconContainer}>
        <AntIcon name="search1" size={24} color={GlobalColors.blackColor} />
      </View>
    </SafeAreaView>
  );
};

const DetailHeader: React.FC = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.detailHeaderWrapper}>
      <AntIcon
        name="left"
        size={24}
        color={GlobalColors.whiteColor}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.h2}>Detail</Text>
      <AntIcon name="heart" size={24} color={GlobalColors.whiteColor} />
    </SafeAreaView>
  );
};

export {Header, DetailHeader};

const styles = StyleSheet.create({
  h1: {fontSize: 24, fontWeight: '600', color: GlobalColors.whiteColor},
  h2: {fontSize: 20, fontWeight: '600', color: GlobalColors.whiteColor},
  h3: {fontSize: 16, fontWeight: '400', color: GlobalColors.whiteColor},
  headerWrapper: {
    backgroundColor: GlobalColors.bgColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: GlobalColors.secondryColor,
    borderRadius: 5,
  },
  detailHeaderWrapper: {
    backgroundColor: GlobalColors.bgColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
