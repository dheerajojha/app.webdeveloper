import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Day012/HomeScreen';

const Tabs = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigation;
