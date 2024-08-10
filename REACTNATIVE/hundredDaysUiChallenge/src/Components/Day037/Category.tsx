import {Dimensions, FlatList, StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
const{height,width}=Dimensions.get('window')

const Category = () => {
    interface category {
        id: number,
        title: string,
        image: string
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
    
  return (
    <FlatList showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ gap: 40 }} data={category} renderItem={({ item }) => (
        <TouchableOpacity key={item.id} style={styles.categoryCard}>
          <Image source={item.image} style={{ width: 60, height: 60 }} />
          <Text style={{ color: '#000' }}>{item.title}</Text>
        </TouchableOpacity>
      )} />
  )
}
const styles = StyleSheet.create({
    categoryCard: { borderWidth: 1, width: 100, height: 100, justifyContent: 'center', gap: 5, alignItems: 'center', borderColor: 'gray', borderRadius: 5 },
})
export default Category