import { FlatList, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntIcon from "react-native-vector-icons/AntDesign"
import EntIcon from "react-native-vector-icons/Entypo"
import GlobalStyles from '../../Constants/GlobalStyles'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const [transaction, setTransaction] = useState([{
    id: 1,
    name: "uber",
    image: 'user',
    rate: 55
  },
  {
    id: 2,
    name: "flipkart",
    image: 'flipkart',
    rate: 34
  },
  {
    id: 3,
    name: "nyka",
    image: 'nyka',
    rate: 83
  },
  {
    id: 4,
    name: "amazon",
    image: 'amzaon',
    rate: 29
  },
  ])
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'default'} />
      <SafeAreaView style={styles.homeWrapper}>
        <View style={GlobalStyles.flexBetween}>
          <View>
            <Text style={{ color: '#fff' }}>hi,Peter</Text>
            <Text style={{ color: '#fff' }}>Good morning</Text>
          </View>
          <Pressable style={{ backgroundColor: '#2b3044', padding: 10, borderRadius: 30 }}>
            <EntIcon name='bell' color='#fff' size={24} />
          </Pressable>
        </View>

        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h1}>My Cards</Text>
          <Text style={{ color: '#1a76ff' }}>See All</Text>
        </View>

        <View style={GlobalStyles.flexBetween}>
          <View>
            <Text style={styles.h2}>Add a new Card</Text>
            <Text style={{ color: '#fff' }}>Add more goals</Text>
          </View>
          <Pressable style={{ backgroundColor: '#fff', padding: 10, borderRadius: 20 }}>
            <AntIcon name='plus' size={24} color='#000' />
          </Pressable>
        </View>

        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h1}>Transaction</Text>
          <Text style={{ color: '#1a76ff' }}>See All</Text>
        </View>

        <FlatList contentContainerStyle={{ gap: 10 }} data={transaction} renderItem={({ item }) => (
          <TouchableOpacity key={item.id} style={{ padding: 20, borderRadius: 10, backgroundColor: '#2b3044' }}>
            <View style={GlobalStyles.flexBetween}>
              <View style={GlobalStyles.flexRow}>
                <TouchableOpacity style={{backgroundColor:'#fff',width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius:30}}>
                <Text>{item.image}</Text>
                </TouchableOpacity>
                <Text style={styles.h2}>{item.name}</Text>
              </View>
              <Text style={styles.h2}>${item.rate}</Text>
            </View>
          </TouchableOpacity>
        )} />
      </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  h1: { fontSize: 20, fontWeight: '600', color: '#fff' },
  h2: { fontSize: 18, fontWeight: '600', color: '#fff' },
  homeWrapper: { padding: 10, backgroundColor: '#070d25', gap: 15 }
})