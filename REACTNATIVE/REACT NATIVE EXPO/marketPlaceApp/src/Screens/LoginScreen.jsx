import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import gStyles from "../../style"

const LoginScreen = () => {
  return (
    <SafeAreaView className="justify-center items-center h-full p-4">
      <Text style={styles.h1}>MARKETPLACE</Text>
      <View className="w-full gap-y-6">
        <View className="gap-y-6">
          <TextInput placeholder='Email' style={gStyles.input} />
          <TextInput placeholder='Password' style={gStyles.input} />
        </View>
        <TouchableOpacity style={gStyles.cta}>
          <Text style={gStyles.ctaText}>Login</Text>
        </TouchableOpacity>     
       <Text className="text-center">Don't have an Account? <Text style={gStyles.small}>Register</Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  h1: { fontSize: 24, fontWeight: '600', fontStyle: 'italic' },

})