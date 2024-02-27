/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen2 from '../Screens/HomeScreen2';
import UlxScreen from '../Screens/UlxScreen';
import UlxWishList from '../Screens/UlxWishList';
import Color from '../Utils/Color';
import UlxAddProductScreen from '../Screens/UlxAddProductScreen';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={UlxScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="home" size={24} color={Color.primaryColor} />
            ) : (
              <AntIcon name="home" size={24} color={Color.blackColor} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen2}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="search1" size={24} color={Color.primaryColor} />
            ) : (
              <AntIcon name="search1" size={24} color={Color.blackColor} />
            ),
        }}
      />
      <Tab.Screen
        name="UlxAdd"
        component={UlxAddProductScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="plus" size={24} color={Color.primaryColor} />
            ) : (
              <AntIcon name="plus" size={24} color={Color.blackColor} />
            ),
        }}
      />
      <Tab.Screen
        name="UlxWishList"
        component={UlxWishList}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="heart" size={24} color={Color.primaryColor} />
            ) : (
              <AntIcon name="heart" size={24} color={Color.blackColor} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen2}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="user" size={24} color={'#000'} />
            ) : (
              <AntIcon name="user" size={24} color={'#114F5A'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
