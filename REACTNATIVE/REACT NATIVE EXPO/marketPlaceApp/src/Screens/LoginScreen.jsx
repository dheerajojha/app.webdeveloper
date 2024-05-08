import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  return (
    <SafeAreaView className="h-screen gap-4">
     <View className="h-1/2">
     <Image source={{uri:'https://static.doofinder.com/main-files/uploads/2019/03/marketplace-e-commerce-1.jpg'}} className="h-full"/>
     </View>
     <View className="h-1/2 p-4">
      <Text>Visit Market Place</Text>
      <TouchableOpacity className="bg-blue-500">
        <Text>Get Started</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}

export default LoginScreen