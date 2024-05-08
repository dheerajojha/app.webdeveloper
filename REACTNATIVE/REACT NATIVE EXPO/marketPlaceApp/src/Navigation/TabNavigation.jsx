import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from '../Screens/HomeScreen';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon:()=>{<AntDesign name="home" size={24} color="black" />}}}/>
    </Tab.Navigator>
  )
}

export default TabNavigation