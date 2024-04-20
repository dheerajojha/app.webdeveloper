/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import GlobalColors from '../../Constants/GlobalColors';
import HomeScreen from '../../Screens/Day021/HomeScreen';
import ProfileScreen from '../../Screens/Day021/ProfileScreen';
import BookmarkScreen from '../../Screens/Day021/BookmarkScreen';
import SettingScreen from '../../Screens/Day021/SettingScreen';

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
                color={GlobalColors.primaryColor}
              />
            ) : (
              <IonIcon name="home" size={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontIcon
                name="user"
                size={24}
                color={GlobalColors.primaryColor}
              />
            ) : (
              <FontIcon name="user-o" size={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontIcon
                name="bookmark"
                size={24}
                color={GlobalColors.primaryColor}
              />
            ) : (
              <FontIcon name="bookmark-o" size={24} />
            ),
        }}
      />

      <Tabs.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <IonIcon
                name="settings"
                size={24}
                color={GlobalColors.primaryColor}
              />
            ) : (
              <IonIcon name="settings-sharp" size={24} />
            ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;
