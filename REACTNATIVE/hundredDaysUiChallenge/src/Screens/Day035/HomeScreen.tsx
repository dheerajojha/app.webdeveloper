import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from "react-native-vector-icons/AntDesign"
import GlobalStyles from '../../Constants/GlobalStyles'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeWrapper}>
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <View style={GlobalStyles.flexRow}>
          <Text>user</Text>
          {/* <Image source={}/> */}
          <View >
            <Text>Jason Green</Text>
            <Text>Jampra id</Text>
          </View>
        </View>
        <AntIcon name='bells' size={20} />
      </View>

      <View style={{ backgroundColor: '#f44147', padding: 30, borderRadius: 20, }}>
        <Text style={{ color: '#fff' }}>Your Balance</Text>
        <Text style={styles.h1}>$7,39733</Text>
      </View>

      <Text>Track your shiping</Text>
      <View style={GlobalStyles.flexRow}>
        <AntIcon name='search1' size={24} />
        <TextInput placeholder='Search Your Favorite songs' style={{width:'80%'}} />
      <Pressable style={{backgroundColor:'#f44147',padding:10,borderRadius:30}}>
      <AntIcon name='filter' size={24} color='#fff' />
      </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  h1: { fontSize: 28, fontWeight: '600', color: '#fff' },
  homeWrapper: { padding: 10, flex: 1, backgroundColor: '#fff', gap: 15 }
})