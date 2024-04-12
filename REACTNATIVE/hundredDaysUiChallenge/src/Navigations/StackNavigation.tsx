import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import ProductScreen from '../Screens/Day015/ProductScreen';
import ProductDetailScreen from '../Screens/Day015/ProductDetailScreen';
import CartScreen from '../Screens/Day015/CartScreen';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="BottomNavigation">
        {/* day 001 */}
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} /> */}

        {/* day 002 */}
        {/* <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} /> */}

        {/* day 003 */}
        {/* <Stack.Screen name="User" component={UserScreen} /> */}

        {/* day 004 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        {/* day 005 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* day 006 */}

        {/* <Stack.Screen name="Product" component={ProductScreen} /> */}

        {/* day 007 */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} /> */}

        {/* day 008 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} /> */}

        {/* day 009 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        {/* day 010 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        {/* day 011 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        {/* day 012 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        {/* day 014 */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

        {/* day 015 */}
        <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} />
        {/* day 016 */}

        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        {/* day 017 */}
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />

        {/* day 018 */}
        {/* created by @uiux_app_webdeveloper */}
        {/* cart */}
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
