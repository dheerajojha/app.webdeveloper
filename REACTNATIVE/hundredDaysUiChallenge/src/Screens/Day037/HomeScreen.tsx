import {Dimensions, ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalStyles from '../../Constants/GlobalStyles'
const{height,width}=Dimensions.get('window')
const HomeScreen = () => {
  interface category {
    id:number,
    title:string,
    image:string
  }
  const [category, setCategory] = useState<category[]>([{
    id: 1,
    title: 'Stays',
    image: require('../../Assets/Images/Day037/h.png')
  },
  {
    id: 2,
    title: 'Flight',
    image: require('../../Assets/Images/Day037/travelling.png')
  },
  {
    id: 3,
    title: 'Cars',
    image: require('../../Assets/Images/Day037/transport.png')
  },
  {
    id: 4,
    title: 'Package',
    image: require('../../Assets/Images/Day037/package.png')
  },
  {
    id: 5,
    title: 'Things to do',
    image: require('../../Assets/Images/Day037/working.png')
  },
  {
    id: 6,
    title: 'Cuises',
    image: require('../../Assets/Images/Day037/h.png')
  },
  ])

  const[travel,setTravel]=useState([{
    id:1,
    title:'resort1',
    image:require('../../Assets/Images/Day037/p1.jpg')
  },
  {
    id:2,
    title:'resort2',
    image:require('../../Assets/Images/Day037/p2.jpg')
  },
  {
    id:3,
    title:'resort3',
    image:require('../../Assets/Images/Day037/p3.jpg')
  },
  {
    id:4,
    title:'resort4',
    image:require('../../Assets/Images/Day037/p4.jpg')
  },
])


  return (
    <>
      <StatusBar backgroundColor={'#fff'} translucent barStyle={'dark-content'} />
      <SafeAreaView style={styles.homeWrapper}>
        <View>
          <Text style={styles.h1}>Expedia</Text>
        </View>

        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h2}>Hi,User</Text>
          <TouchableOpacity style={styles.cta}>
            <ActivityIndicator />
            <Text style={styles.ctaText}>Blue</Text>
          </TouchableOpacity>
        </View>

        <FlatList horizontal contentContainerStyle={{ gap: 40 }} data={category} renderItem={({ item }) => (
          <TouchableOpacity key={item.id} style={styles.categoryCard}>
            <Image source={item.image} style={{ width: 60, height: 60 }} />
            <Text style={{ color: '#000' }}>{item.title}</Text>
          </TouchableOpacity>
        )} />

        <View style={[GlobalStyles.flexRow, styles.exploreContainer]}>
          <ActivityIndicator size={30} />
          <View style={{gap:10}}>
            <Text style={{ color: '#000', fontSize: 16 }}>User you will Save 10% of your over more than 10000 Hotels in Given time</Text>
            <Text style={{ color: 'blue', fontWeight: '600' }}>Explore Key Benefit</Text>
          </View>
        </View>

        <Text style={styles.h2}>Go Beyond Your Typical Stay</Text>

        <FlatList contentContainerStyle={{position:'relative',gap:20}} data={travel} horizontal renderItem={({item})=>(
          <TouchableOpacity key={item.id}>
          <Image source={item.image} style={{width:width,height:380}}/>
          <Text style={{position:'absolute',bottom:5,left:5,color:'#fff',fontSize:30}}>{item.title}</Text>
          </TouchableOpacity>
        )}/>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  h1: { fontSize: 24, textAlign: 'center', fontWeight: '500', color: '#000' },
  h2: { fontSize: 18, fontWeight: '500', color: '#000' },
  homeWrapper: { backgroundColor: '#fff', padding: 10, gap: 20 },
  cta: { backgroundColor: 'blue', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, flexDirection: 'row', gap: 5 },
  ctaText: { textAlign: 'center', color: '#fff' },
  categoryCard: { borderWidth: 1, width: 100, height: 100, justifyContent: 'center', gap: 5, alignItems: 'center', borderColor: 'gray', borderRadius: 5 },
  exploreContainer: { padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }
})