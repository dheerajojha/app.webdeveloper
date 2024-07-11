import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../../Screens/Day034/HomeScreen'
import AntIcon from "react-native-vector-icons/AntDesign"
import SearchScreen from '../../Screens/Day034/SearchScreen'
import FavoritesScreen from '../../Screens/Day034/FavoritesScreen'
import ProfileScreen from '../../Screens/Day034/ProfileScreen'
const Tab = createBottomTabNavigator()
const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false, tabBarStyle: { height: 70,paddingBottom:10 },
      tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'gray'
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <AntIcon color={color} size={24} name="home" /> }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: ({ color }) => <AntIcon color={color} size={24} name="search1" /> }} />
      <Tab.Screen name="Favorite" component={FavoritesScreen} options={{ tabBarIcon: ({ color }) => <AntIcon color={color} size={24} name="heart" /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => <AntIcon color={color} size={24} name="user" /> }} /> 
    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})