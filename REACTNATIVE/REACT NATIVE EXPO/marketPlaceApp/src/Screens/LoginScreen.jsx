import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import gStyles from "../../style"
import {useNavigation} from "@react-navigation/native"
import { showMessage } from 'react-native-flash-message'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

const LoginScreen = () => {
  const navigation = useNavigation();
  const[email,setEmal]=useState('')
  const[password,setPassword]=useState('')
  const loginHandler =async ()=>{
    try {
      const response = await signInWithEmailAndPassword(auth,email,password)
      if(response){
        showMessage({type:"success",message:"user Logged in"})
        navigation.navigate('TabNavigation')
      }
    } catch (error) {
      showMessage({type:"danger",message:error.message})
    }
  }
  return (
    <SafeAreaView className="justify-center items-center h-full p-4">
      <Text style={styles.h1}>MARKETPLACE</Text>
      <View className="w-full gap-y-6">
        <View className="gap-y-6">
          <TextInput placeholder='Email' style={gStyles.input} value={email} onChangeText={(text)=>setEmal(text)} />
          <TextInput placeholder='Password' style={gStyles.input}  value={password} onChangeText={(text)=>setPassword(text)}/>
        </View>
        <TouchableOpacity style={gStyles.cta} onPress={loginHandler}>
          <Text style={gStyles.ctaText}>Login</Text>
        </TouchableOpacity>     
       <Text className="text-center">Don't have an Account? <Text style={gStyles.small} onPress={()=>navigation.navigate('RegisterScreen')}>Register</Text></Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  h1: { fontSize: 24, fontWeight: '600', fontStyle: 'italic' },

})