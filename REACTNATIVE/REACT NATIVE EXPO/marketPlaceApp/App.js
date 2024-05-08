import React from 'react'
import {View} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import TabNavigation from './src/Navigation/TabNavigation'
import LoginScreen from "./src/Screens/LoginScreen"
import { StatusBar } from 'expo-status-bar'
const App = () => {
  return (
    <View>
    <StatusBar style='auto'/>
    <LoginScreen/>
    </View>
  
  )
}

export default App