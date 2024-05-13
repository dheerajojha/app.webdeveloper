import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, AddPostScreen, ExploreScreen, ProfileScreen } from '../Screens';
import gStyles from '../../style';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: 'blue', tabBarInactiveTintColor: 'black',
      tabBarStyle: { height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
    }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (<AntDesign name="home" size={24} color={color} />) }} />
      <Tab.Screen name="AddPostScreen" component={AddPostScreen} options={{ tabBarIcon: ({ color }) => (<AntDesign name="camera" size={24} color={color} />) }} />
      <Tab.Screen name="ExploreScreen" component={ExploreScreen} options={{ tabBarIcon: ({ color }) => (<AntDesign name="search1" size={24} color={color} />) }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => (<AntDesign name="user" size={24} color={color} />) }} />
    </Tab.Navigator>
  )
}

export default TabNavigation