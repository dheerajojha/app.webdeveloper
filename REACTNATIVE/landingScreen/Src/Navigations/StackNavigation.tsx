import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen1 from '../Screens/HomeScreen1';
import React from 'react';
import HomeScreen2 from '../Screens/HomeScreen2';
import HomeScreen3 from '../Screens/HomeScreen3';
// import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="TabNavigation" component={BottomNavigation} /> */}
        <Stack.Screen name="Home3" component={HomeScreen3} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
        <Stack.Screen name="Home1" component={HomeScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
