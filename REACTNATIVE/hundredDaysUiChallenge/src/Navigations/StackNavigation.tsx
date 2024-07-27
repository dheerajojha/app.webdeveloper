import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../Screens/Day035/RegisterScreen';
import LoginScreen from '../Screens/Day035/LoginScreen';
import BottomTabNavigation from './Day035/BottomTabNavigation';
import DetailScreen from '../Screens/Day035/DetailScreen';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="BottomTabNavigation">
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
        <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}

        {/* day 025 */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SingleScreen" component={SingleScreen}/> */}

        {/* day 026 */}
        {/* <Stack.Screen name="TabNavigator" component={BottomTabNavigation}/> */}

        {/* day 026 */}
        {/* <Stack.Screen name="TabNavigation" component={BottomTabNavigation}/>
            <Stack.Screen name="InvestmentDetailScreen" component={InvestementDetailScreen}/> */}

        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} /> */}

        {/* day 29 */}
        {/* <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="SearchScreen" component={SearchScreen} /> */}

        {/* <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation}/> 
           <Stack.Screen name="ProductDetail" component={ProductDetailScreen}/> 
           <Stack.Screen name="Cart" component={CartScreen}/>  */}

        {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen}/> */}

        {/* <Stack.Screen name="BottomTab" component={BottomNavigation} />
        <Stack.Screen name="single-screen" component={SingleScreen} /> */}

            {/* created by @app.webdeveloper */}

            <Stack.Screen name="register" component={RegisterScreen}/>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name='tabnavigation' component={BottomTabNavigation}/>
            <Stack.Screen name='pickupdetail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
