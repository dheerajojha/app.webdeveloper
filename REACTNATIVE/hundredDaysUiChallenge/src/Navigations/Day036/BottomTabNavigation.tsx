import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../../Screens/Day036/HomeScreen'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AntIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import HistoryScreen from '../../Screens/Day036/HistoryScreen'
import CardScreen from '../../Screens/Day036/CardScreen'
import ProfileScreen from '../../Screens/Day036/ProfileScreen'
const Tab = createBottomTabNavigator()
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:'#1e74f8',tabBarStyle:{backgroundColor:'#04091d',height:80,paddingBottom:20}}}>
        <Tab.Screen name='home' component={HomeScreen} options={{tabBarIcon:({color})=>(<AntIcon color={color} name='home' size={24}/>)}}/>
        <Tab.Screen name='history' component={HistoryScreen} options={{tabBarIcon:({color})=>(<MaterialIcon color={color} name='history' size={24}/>)}}/>
        <Tab.Screen name='card' component={CardScreen} options={{tabBarIcon:({color})=>(<AntIcon color={color} name='creditcard' size={24}/>)}}/>
        <Tab.Screen name='profile' component={ProfileScreen} options={{tabBarIcon:({color})=>(<AntIcon color={color} name='profile' size={24}/>)}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})