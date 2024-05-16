import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { db } from '../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const ExploreScreen = () => {
  const [category, setCategory] = useState([])

  const getCategory = async () => {
    try {
      const colRef = collection(db, 'Category');
      const snapshot = await getDocs(colRef);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        
      }));
      setCategory(data);
    } catch (error) {
      console.log(error.message)

    }
  }
  useEffect(() => {
    getCategory()
  }, [])

  return (
    <SafeAreaView>
      <Text>ExploreScreen</Text>
      {category.map((item)=>(
        <Text>{item.title}</Text>
      ))}
    </SafeAreaView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})