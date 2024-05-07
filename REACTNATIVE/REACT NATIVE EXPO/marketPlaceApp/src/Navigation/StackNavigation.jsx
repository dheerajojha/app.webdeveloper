import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../Screens/HomeScreen';
const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </NavigationContainer>
    )
}

export default StackNavigation