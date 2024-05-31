import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntIcon from "react-native-vector-icons/AntDesign"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Day030/HomeScreen';
import SearchScreen from '../../Screens/Day030/SearchScreen';
import BookmarkScreen from '../../Screens/Day030/BookmarkScreen';
import ProfileScreen from '../../Screens/Day030/ProfileScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
       tabBarShowLabel:false,
        tabBarStyle: {height: 80, backgroundColor: '#000',margin:20,borderRadius:20},
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor:'gray'
        
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon:({color})=>(<AntIcon name="home" size={20} color={color}/>)}} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{tabBarIcon:({color})=>(<AntIcon name="search1" size={20} color={color}/>)}} />
      <Tab.Screen name="BookMarkScreen" component={BookmarkScreen} options={{tabBarIcon:({color})=>(<AntIcon name="heart" size={20} color={color}/>)}} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{tabBarIcon:({color})=>(<AntIcon name="user" size={20} color={color}/>)}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
