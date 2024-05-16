import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const ExploreScreen = () => {
 

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