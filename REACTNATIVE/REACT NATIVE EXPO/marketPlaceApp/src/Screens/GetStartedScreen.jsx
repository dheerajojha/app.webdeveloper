import { View, Text,Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import gStyles from "../../style";

const GetStartedScreen = () => {
const navigation = useNavigation()
  return (
    <View className="h-full">
     <View className="h-[70%]">
     <Image source={{uri:'https://static.doofinder.com/main-files/uploads/2019/03/marketplace-e-commerce-1.jpg'}} className="h-full"/>
     </View>
     <View className="h-[32%] items-center gap-y-6 bg-white rounded-t-3xl p-4">
      <Text style={styles.h1}>Visit Market Place</Text>
      <Text style={gStyles.p}>Visit Market Place For Your 24*7 Services With Ease and Assing You with Top Notch Services and Effect Your Process With Ease and Strategy Basis</Text>
      <TouchableOpacity style={gStyles.cta} onPress={()=>navigation.navigate('RegisterScreen')}>
        <Text style={gStyles.ctaText}>Get Started</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  h1:{fontSize:24,fontWeight:'600'},
})

export default GetStartedScreen