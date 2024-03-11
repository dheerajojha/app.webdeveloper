/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text,
} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GlobalColors from '../Constants/GlobalColors';
import GlobalStyles from '../Constants/GlobalStyles';
const HeaderLeft = () => {
  // Create a new Date object for today's date
  const today = new Date();

  // Define arrays for days of the week and months
  const daysOfWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get day of the week, day of the month, month, and year
  const dayOfWeek = daysOfWeek[today.getDay()];
  const dayOfMonth = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  // Format the date string
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <StatusBar
        backgroundColor={GlobalColors.whiteColor}
        barStyle={'dark-content'}
      />
      <View style={GlobalStyles.flexRow}>
        <Image
          source={require('../Assets/Images/Day3/me.png')}
          style={styles.image}
        />
        <View>
          <Text style={{color: GlobalColors.blackColor, fontWeight: '600'}}>
            Hellow Anna
          </Text>
          <Text>{formattedDate}</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <IonIcon
          name="notifications"
          size={20}
          color={GlobalColors.blackColor}
        />
        <View style={styles.notification} />
      </View>
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
    backgroundColor: GlobalColors.whiteColor,
  },
  image: {
    width: 40,
    height: 40,
    borderColor: GlobalColors.whiteColor,
    borderWidth: 1,
    borderRadius: 30,
  },
  iconContainer: {
    backgroundColor: GlobalColors.grayColor,
    padding: 10,
    borderRadius: 50,
  },
  notification: {
    backgroundColor: GlobalColors.secondryColor,
    width: 10,
    height: 10,
    borderRadius: 30,
    right: 10,
    top: 8,
    position: 'absolute',
  },
});
