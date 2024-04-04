import {StyleSheet, Text, View, Appearance} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  console.log(Appearance.getColorScheme());
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
