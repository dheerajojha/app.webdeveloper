/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalColors from '../../Constants/GlobalColors';
import HomeScreen from '../../Screens/Day022/HomeScreen';
import ProfileScreen from '../../Screens/Day021/ProfileScreen';
import BookmarkScreen from '../../Screens/Day021/BookmarkScreen';
import SettingScreen from '../../Screens/Day021/SettingScreen';
import BookingScreen from '../../Screens/Day022/BookingScreen';
import SearchScreen from '../../Screens/Day022/SearchScreen';

const Tabs = createBottomTabNavigator();
const BottomTabNavigation: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: GlobalColors.whiteColor, height: 70},
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <IonIcon
                name="home-sharp"
                size={24}
                color={GlobalColors.blackColor}
              />
            ) : (
              <IonIcon name="home" size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <IonIcon
                name="calendar"
                size={24}
                color={GlobalColors.blackColor}
              />
            ) : (
              <IonIcon name="calendar" size={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <IonIcon
                name="search"
                size={24}
                color={GlobalColors.blackColor}
              />
            ) : (
              <IonIcon name="search" size={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="user" size={24} color={GlobalColors.blackColor} />
            ) : (
              <AntIcon name="user" size={24} />
            ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;
