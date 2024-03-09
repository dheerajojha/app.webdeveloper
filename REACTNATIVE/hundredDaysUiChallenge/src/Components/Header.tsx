import {StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GlobalColors from '../Constants/GlobalColors';
import {useNavigation} from '@react-navigation/native';
type titleType = {
  title: string;
};
const Header: React.FC<titleType> = ({title}) => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <StatusBar
        backgroundColor={GlobalColors.whiteColor}
        barStyle="dark-content"
      />
      <AntIcon
        name="left"
        size={20}
        color={GlobalColors.blackColor}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.h1}>{title}</Text>
      <IonIcon
        name="notifications-outline"
        size={24}
        color={GlobalColors.blackColor}
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  h1: {fontSize: 24, fontWeight: '600', color: GlobalColors.blackColor},
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: GlobalColors.whiteColor,
  },
});
