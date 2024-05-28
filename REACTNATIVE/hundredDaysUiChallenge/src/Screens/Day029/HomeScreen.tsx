import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
const HomeScreen = () => {
  const category = [
    {
      id: 1,
      title: 'Pizza',
    },
    {
      id: 2,
      title: 'Burger',
    },
  ];

  const categoryActive=(id:any)=>{
   console.log(id)
  }
  return (
    <SafeAreaView style={styles.homeWrapper}>
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <AntIcon name="home" size={20} color="#fff" />
        <AntIcon name="search1" size={20} color="#fff" />
      </View>

      {/* title start */}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.h1}>SPACE BURGER</Text>
        <Text style={styles.h2}>COSMIC TASTE...</Text>
      </View>

      {/* category start */}
      <View style={GlobalStyles.flexRow}>
        {category.map((item, index) => (
          <TouchableOpacity key={index} onPress={()=>categoryActive(item.id)}>
            <Text style={[styles.h2]}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, fontWeight: '700', color: '#449086', letterSpacing: 8},
  h2: {fontSize: 20, fontWeight: '400', color: '#fff'},
  homeWrapper: {padding: 10, backgroundColor: '#000000', flex: 1, gap: 15},
});
