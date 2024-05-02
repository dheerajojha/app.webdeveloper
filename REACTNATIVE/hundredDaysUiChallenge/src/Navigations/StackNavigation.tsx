import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Day025/HomeScreen';
// import BottomTabNavigation from './Day022/BottomTabNavigation';
// import RegisterScreen from '../Screens/Day023/RegisterScreen';
// import LoginScreen from '../Screens/Day023/LoginScreen';
// import RegisterScreen from '../Screens/Day024/RegisterScreen';
// import LoginScreen from '../Screens/Day024/LoginScreen';
// import ProductScreen from '../Screens/Day015/ProductScreen';
// import ProductDetailScreen from '../Screens/Day015/ProductDetailScreen';
// import CartScreen from '../Screens/Day015/CartScreen';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="RegisterScreen">
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
        {/* <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} /> */}
        {/* day 016 */}

        {/* <Stack.Screen name="ProductScreen" component={ProductScreen} /> */}
        {/* day 017 */}
        {/* <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        /> */}

        {/* day 018 */}
        {/* cart */}
        {/* <Stack.Screen name="CartScreen" component={CartScreen} /> */}

        {/* day 022 */}
        {/* <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} /> */}

        {/* day 023 */}
        {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}

           {/* day 025 */}

  {/* created by @app.webdeveloper */}
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
