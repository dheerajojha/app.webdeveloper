import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '../Screens/Day003/UserScreen';
// import Home from '../Screens/Day001/Home';
// import OnBoarding from '../Screens/Day001/OnBoarding';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="User">
        {/* day 001 */}
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} /> */}

        {/* day 002 */}
        {/* <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}

        {/* day 003 */}
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
