import { Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from "react-native-vector-icons/AntDesign"
import EntIcon from "react-native-vector-icons/Entypo"
import GlobalStyles from '../../Constants/GlobalStyles'
const RegisterScreen = () => {
  const [toggleEyePassword, setToggleEyePassword] = useState(false)
  const [toggleEyeCnfPassword, setToggleEyeCnfPassword] = useState(false)
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.registerWrapper}>
        <View>
          <Text style={[styles.h1, { color: '#f44147' }]}>Hellow</Text>
          <Text style={styles.h1}>there✋</Text>
          <Text>Create your account to to access your package history and get real time history and update on shipment</Text>
        </View>

        {/* form start */}
        <View style={{ gap: 15 }}>
          <View style={[GlobalStyles.flexRow, styles.formGroup]}>
            <AntIcon name='mail' size={20} />
            <TextInput placeholder='Enter Email' />
          </View>

          <View style={[GlobalStyles.flexBetween, styles.formGroup]}>
            <View style={GlobalStyles.flexRow}>
              <AntIcon name='lock' size={20} />
              <TextInput placeholder='Enter Password' />
            </View>
            <Pressable onPress={() => setToggleEyePassword(!toggleEyePassword)}>
              {toggleEyePassword ? <EntIcon name='eye' size={20} /> : <EntIcon name='eye-with-line' size={20} />}
            </Pressable>
          </View>

          <View style={[GlobalStyles.flexBetween, styles.formGroup]}>
            <View style={GlobalStyles.flexRow}>
              <AntIcon name='lock' size={20} />
              <TextInput placeholder='Confirm Password' />
            </View>
            <Pressable onPress={() => setToggleEyeCnfPassword(!toggleEyeCnfPassword)}>
              {toggleEyeCnfPassword ? <EntIcon name='eye' size={20} /> : <EntIcon name='eye-with-line' size={20} />}
            </Pressable>
          </View>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Sign up</Text>
          </TouchableOpacity>

          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
            <View  style={{borderWidth:1,borderColor:'#ccc',width:'50%'}}/>
            <Text>or</Text>
            <View style={{borderWidth:1,borderColor:'#ccc',width:'50%'}} />
          </View>

          <View style={[GlobalStyles.flexRow, styles.formGroup, { justifyContent: 'center', }]}>
            <AntIcon name='google' size={34} color='red' />
            <Text style={{ color: '#000', fontWeight: '600', }}>Continue with google</Text>
          </View>

          <Text style={{ textAlign: 'center', fontWeight: '600' }}>Already have an Account<Text style={{ color: '#f44147' }}> Sign in</Text></Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  registerWrapper: { backgroundColor: '#fff', flex: 1, padding: 15, gap: 30 },
  h1: { fontSize: 28, fontWeight: '600', color: '#000' },
  formGroup: { borderColor: '#ccc', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 50, borderWidth: 1 },
  cta: { backgroundColor: '#f44147', paddingHorizontal: 10, paddingVertical: 20, borderRadius: 50 },
  ctaText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: '500' }
})