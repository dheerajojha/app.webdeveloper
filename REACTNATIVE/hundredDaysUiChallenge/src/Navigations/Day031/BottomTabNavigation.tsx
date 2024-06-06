import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../../Screens/Day031/HomeScreen';
import ProfileScreen from '../../Screens/Day031/ProfileScreen';
import FavoritesScreen from '../../Screens/Day031/FavoritesScreen';
import SearchScreen from '../../Screens/Day031/SearchScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#19c563',
        tabBarStyle:{height:80,paddingTop:10},
        tabBarLabelStyle:{fontSize:14,paddingBottom:10,fontWeight:'600'}
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color}) => (
            <AntIcon name="home" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color}) => (
            <AntIcon name="search1" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color}) => (
            <AntIcon name="heart" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color}) => (
            <AntIcon name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
