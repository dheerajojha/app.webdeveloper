import React from 'react'
import LoginScreen from "../Screens/LoginScreen"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (

     <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation}/>
    </Stack.Navigator>

  )
}

export default StackNavigation