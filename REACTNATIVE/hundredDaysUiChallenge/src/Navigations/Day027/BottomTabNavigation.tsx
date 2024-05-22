import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Day027/HomeScreen';
import ProfileScreen from '../../Screens/Day027/ProfileScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import SearchScreen from '../../Screens/Day027/SearchScreen';
import NotificationScreen from '../../Screens/Day027/NotificationScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',tabBarStyle:{height:80}
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarIcon: ({color}) => <AntIcon name="home" size={24} color={color} />}}
      />
        <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{tabBarIcon: ({color}) => <AntIcon name="search1" size={24} color={color} />}}
      />
        <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{tabBarIcon: ({color}) => <AntIcon name="bells" size={24} color={color} />}}
      />
        <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{tabBarIcon: ({color}) => <AntIcon name="user" size={24}color={color} />}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
