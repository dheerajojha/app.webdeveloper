import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Day029/HomeScreen';
import SearchScreen from '../../Screens/Day029/SearchScreen';
import ProfileScreen from '../../Screens/Day029/ProfileScreen';
import CartScreen from '../../Screens/Day029/CartScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 80, backgroundColor: '#000000'},
        tabBarActiveTintColor: '#449086',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreeen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="shoppingcart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntIcon name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
