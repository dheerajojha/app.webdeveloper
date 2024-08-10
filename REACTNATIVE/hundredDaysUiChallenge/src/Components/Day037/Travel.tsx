import { Dimensions, FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient'
const Travel = () => {

  const [travel, setTravel] = useState([{
    id: 1,
    title: 'Spa',
    image: require('../../Assets/Images/Day037/p1.jpg')
  },
  {
    id: 2,
    title: 'Resort',
    image: require('../../Assets/Images/Day037/p2.jpg')
  },
  {
    id: 3,
    title: 'Cabin',
    image: require('../../Assets/Images/Day037/p3.jpg')
  },
  {
    id: 4,
    title: 'Murinio',
    image: require('../../Assets/Images/Day037/p4.jpg')
  },
  ])
  return (
    <FlatList showsHorizontalScrollIndicator={false} contentContainerStyle={{ position: 'relative', gap: 20, marginBottom: 40 }} data={travel} horizontal renderItem={({ item }) => (
      <TouchableOpacity key={item.id}>
        <Image source={item.image} style={{ width: width / 2, height: 380, borderRadius: 20 }} />
        <LinearGradient colors={['rgba(0,0,0,0.3)','rgba(0,0,0,0.8)']} style={styles.cardbody}>
          <Text style={{fontSize:26,color:'#fff'}}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )} />
  )
}

export default Travel

const styles = StyleSheet.create({
  cardbody: {
    position: 'absolute', bottom:6, left: 5,
    color: '#fff', fontSize: 26,paddingHorizontal:30,borderRadius:20
  }
})