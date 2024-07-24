import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../../Screens/Day035/HomeScreen'
import AntIcon from "react-native-vector-icons/AntDesign"
import FeatherIcon from "react-native-vector-icons/Feather"
import ProfileScreen from '../../Screens/Day035/ProfileScreen'
import InboxScreen from '../../Screens/Day035/InboxScreen'
import ActivityScreen from '../../Screens/Day035/ActivityScreen'
const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:'#f44147',tabBarInactiveTintColor:'gray',tabBarStyle:{height:70,paddingBottom:10}}}>
        <Tab.Screen name='home' component={HomeScreen} options={{tabBarIcon:({color})=><AntIcon color={color} size={24} name='home'/>}}/>
        <Tab.Screen name='activity' component={ActivityScreen} options={{tabBarIcon:({color})=><FeatherIcon color={color} size={24} name='activity'/>}}/>
        <Tab.Screen name='inbox' component={InboxScreen} options={{tabBarIcon:({color})=><AntIcon color={color} size={24} name='inbox'/>}}/>
        <Tab.Screen name='profile' component={ProfileScreen} options={{tabBarIcon:({color})=><AntIcon color={color} size={24} name='user'/>}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})