import { Dimensions, ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyles from '../../Constants/GlobalStyles'
import Travel from '../../Components/Day037/Travel'
import Category from '../../Components/Day037/Category'
const { height, width } = Dimensions.get('window')
const HomeScreen = () => {

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <StatusBar backgroundColor={'#fff'} translucent barStyle={'dark-content'} />
      <SafeAreaView style={styles.homeWrapper}>
        <View>
          <Text style={styles.h1}>Expedia</Text>
        </View>

        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h2}>Hi,User</Text>
          <TouchableOpacity style={styles.cta}>
            <ActivityIndicator  color='#fff'/>
            <Text style={styles.ctaText}>Blue</Text>
          </TouchableOpacity>
        </View>

        <Category />

        <View style={[GlobalStyles.flexRow, styles.exploreContainer]}>
          <ActivityIndicator size={30} />
          <View style={{ gap: 10 }}>
            <Text style={{ color: '#000', fontSize: 16 }}>User you will Save 10% of your over more than 10000 Hotels in Given time</Text>
            <Text style={{ color: '#2196F3', fontWeight: '600' }}>Explore Key Benefit</Text>
          </View>
        </View>

        <Text style={styles.h2}>Go Beyond Your Typical Stay</Text>

        <Travel />
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  h1: { fontSize: 24, textAlign: 'center', fontWeight: '500', color: '#000' },
  h2: { fontSize: 18, fontWeight: '500', color: '#000' },
  homeWrapper: { backgroundColor: '#fff', padding: 10, gap: 20 },
  cta: { backgroundColor: '#2196F3', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, flexDirection: 'row', gap: 5 },
  ctaText: { textAlign: 'center', color: '#fff' },
  exploreContainer: { padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }
})