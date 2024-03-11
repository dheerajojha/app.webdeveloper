import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Day004/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        {/* day 001 */}
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} /> */}

        {/* day 002 */}
        {/* <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}

        {/* day 003 */}
        {/* <Stack.Screen name="User" component={UserScreen} /> */}

        {/* day 004 */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
