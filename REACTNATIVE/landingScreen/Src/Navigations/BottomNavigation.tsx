/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen2 from '../Screens/HomeScreen2';
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
        component={HomeScreen2}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="home" size={24} color={'#000'} />
            ) : (
              <AntIcon name="home" size={24} color={'#114F5A'} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen2}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="search1" size={24} color={'#000'} />
            ) : (
              <AntIcon name="search1" size={24} color={'#114F5A'} />
            ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={HomeScreen2}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="scan1" size={24} color={'#000'} />
            ) : (
              <AntIcon name="scan1" size={24} color={'#114F5A'} />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen2}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntIcon name="shoppingcart" size={24} color={'#000'} />
            ) : (
              <AntIcon name="shoppingcart" size={24} color={'#114F5A'} />
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
