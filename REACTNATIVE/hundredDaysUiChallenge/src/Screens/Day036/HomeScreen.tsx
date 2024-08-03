import {Dimensions, FlatList, Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntIcon from "react-native-vector-icons/AntDesign"
import EntIcon from "react-native-vector-icons/Entypo"
import GlobalStyles from '../../Constants/GlobalStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
const{height,width}=Dimensions.get('window')
const HomeScreen = () => {
  const [card, setCard] = useState([{
    id: 1,
    cardBal: '12,403,21',
    cardNum: 302930203902,
    bg:'#ffbb02',
  },
  {
    id: 2,
    cardBal: '15,403,21',
    cardNum: 102930203904,
    bg:'#1a76ff',
  },
  {
    id: 3,
    cardBal: '10,403,21',
    cardNum: 202930239002,
    bg:'#000000',
  },
  ])
  const [transaction, setTransaction] = useState([{
    id: 1,
    name: "uber",
    image: require('../../Assets/Images/Day036/uber.png'),
    rate: 55
  },
  {
    id: 2,
    name: "flipkart",
    image: require('../../Assets/Images/Day036/distribution.png'),
    rate: 34
  },
  {
    id: 3,
    name: "nyka",
    image: require('../../Assets/Images/Day036/store.png'),
    rate: 83
  },
  {
    id: 4,
    name: "amazon",
    image: require('../../Assets/Images/Day036/shopping.png'),
    rate: 29
  },
  ])
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'default'} />
      <SafeAreaView style={styles.homeWrapper}>
        {/* header start */}
        <View style={GlobalStyles.flexBetween}>
          <View style={GlobalStyles.flexRow}>
            <LottieView source={require('../../Assets/Animations/user.json')} style={{ width: 60, height: 60 }} autoPlay loop />
            <View>
              <Text style={styles.h2}>hi,Peter</Text>
              <Text style={{ color: '#fff' }}>Good morning</Text>
            </View>
          </View>
          <Pressable style={{ backgroundColor: '#2b3044', padding: 10, borderRadius: 30 }}>
            <EntIcon name='bell' color='#fff' size={24} />
          </Pressable>
        </View>

        {/*cards start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h1}>My Cards</Text>
          <Text style={{ color: '#1a76ff' }}>See All</Text>
        </View>
        <FlatList contentContainerStyle={{flexDirection:'row',gap:10}} data={card} renderItem={({item})=>(
          <TouchableOpacity style={styles.card} key={item.id}>
           <Text style={styles.h2}>${item.cardBal}</Text>
           <Pressable style={[styles.cta,{backgroundColor:`${item.bg}`}]}>
           <Text style={{color:'#fff',fontSize:10}}>${item.cardNum}</Text>
           </Pressable>
          </TouchableOpacity>
        )}/>

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

        {/*transaction start */}
        <FlatList contentContainerStyle={{ gap: 10 }} data={transaction} renderItem={({ item }) => (
          <TouchableOpacity key={item.id} style={{ padding: 20, borderRadius: 10, backgroundColor: '#2b3044' }}>
            <View style={GlobalStyles.flexBetween}>
              <View style={GlobalStyles.flexRow}>
                <TouchableOpacity style={{ backgroundColor: '#fff', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                  <Image source={item.image} style={{ width: 40, height: 40 }} />
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
  h2: { fontSize: 18, fontWeight: '500', color: '#fff' },
  homeWrapper: { padding: 10, backgroundColor: '#070d25', gap: 15 },
  card:{backgroundColor:'#2b3044',padding:10,height:height/6,width:width/3.4,justifyContent:'space-between',borderRadius:10},
  cta: { paddingVertical: 20,paddingHorizontal:10, borderRadius: 30, },
  ctaText: { textAlign: 'center', color: '#ffffff', fontWeight: '600' },
})