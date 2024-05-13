import React from 'react'
import {LoginScreen,GetStartedScreen} from "../Screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStartedScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>


  )
}

export default StackNavigation