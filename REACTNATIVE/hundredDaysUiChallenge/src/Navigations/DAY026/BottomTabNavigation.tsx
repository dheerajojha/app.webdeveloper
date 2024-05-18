import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Day026/HomeScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ProfileScreen from '../../Screens/Day026/ProfileScreen';
import NotificationsScreen from '../../Screens/Day026/NotificationsScreen';
import AddPostScreen from '../../Screens/Day026/AddPostScreen';
import SearchScreen from '../../Screens/Day026/SearchScreen';
const Tabs = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'red',
        tabBarStyle: {
          backgroundColor: 'black',
          margin: 10,
          borderRadius: 10,
          height: 55,
        },
      }}>
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="home" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="search1" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="plus" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="bells" size={24} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
