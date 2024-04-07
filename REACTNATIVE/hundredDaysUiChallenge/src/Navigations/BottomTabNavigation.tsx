/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Day015/HomeScreen';
import CartScreen from '../Screens/Day015/CartScreen';
import WishlistScreen from '../Screens/Day015/WishlistScreen';
import ProfileScreen from '../Screens/Day015/ProfileScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import GlobalColors from '../Constants/GlobalColors';

const Tabs = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: GlobalColors.whiteColor, height: 70},
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconContainer}>
                <IonIcon
                  name="home"
                  color={GlobalColors.whiteColor}
                  size={20}
                />
                <Text style={styles.iconLabel}>Home</Text>
              </View>
            ) : (
              <IonIcon
                name="home-outline"
                color={GlobalColors.blackColor}
                size={20}
              />
            ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconContainer}>
                <IonIcon
                  name="cart"
                  color={GlobalColors.whiteColor}
                  size={20}
                />
                <Text style={styles.iconLabel}>Cart</Text>
              </View>
            ) : (
              <IonIcon
                name="cart-outline"
                color={GlobalColors.blackColor}
                size={20}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconContainer}>
                <IonIcon
                  name="heart"
                  color={GlobalColors.whiteColor}
                  size={20}
                />
                <Text style={styles.iconLabel}>Heart</Text>
              </View>
            ) : (
              <AntIcon
                name="hearto"
                color={GlobalColors.blackColor}
                size={20}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconContainer}>
                <FontIcon
                  name="user"
                  color={GlobalColors.whiteColor}
                  size={20}
                />
                <Text style={styles.iconLabel}>User</Text>
              </View>
            ) : (
              <FontIcon
                name="user-o"
                color={GlobalColors.blackColor}
                size={20}
              />
            ),
        }}
      />
    </Tabs.Navigator>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: GlobalColors.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    padding: 10,
    borderRadius: 5,
  },
  iconLabel: {color: GlobalColors.whiteColor, fontWeight: '500'},
});

export default BottomTabNavigation;
