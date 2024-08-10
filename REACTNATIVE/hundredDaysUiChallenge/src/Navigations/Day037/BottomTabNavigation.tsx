import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../../Screens/Day037/HomeScreen'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import SearchScreen from '../../Screens/Day037/SearchScreen'
import InboxScreen from '../../Screens/Day037/InboxScreen'
import TripScreen from '../../Screens/Day037/TripScreen'
import AccountScreen from '../../Screens/Day037/AccountScreen'
const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,tabBarActiveTintColor:'#2196F3',tabBarInactiveTintColor:'gray',tabBarStyle:{height:80,paddingBottom:15} }}>
      <Tab.Screen name='home' component={HomeScreen} options={{ tabBarIcon: ({color}) => <AntIcon color={color} name='home' size={24} /> }} />
      <Tab.Screen name='search' component={SearchScreen} options={{ tabBarIcon: ({color}) => <AntIcon color={color} name='search1' size={24} /> }} />
      <Tab.Screen name='inbox' component={InboxScreen} options={{ tabBarIcon: ({color}) => <AntIcon color={color} name='inbox' size={24} /> }} />
      <Tab.Screen name='trip' component={TripScreen} options={{ tabBarIcon: ({color}) => <FontIcon color={color} name='bus' size={24} /> }} />
      <Tab.Screen name='account' component={AccountScreen} options={{ tabBarIcon: ({color}) => <AntIcon color={color} name='user' size={24} /> }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})