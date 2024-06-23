import { Pressable, StatusBar, StyleSheet, Text, TextInput, View, CheckBox, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from "react-native-vector-icons/AntDesign"
import EntIcon from "react-native-vector-icons/Entypo"
import FontIcon from "react-native-vector-icons/Fontisto"
import GlobalStyles from '../../Constants/GlobalStyles'


const RegisterScreen = () => {
  const [togglePassword, setTogglePassword] = useState(false)
  const [toggleCheck, setToggleCheck] = useState(false)
  return (
    <>
      <StatusBar backgroundColor={'#f1f2f3'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.registerWrapper}>
        <Text style={styles.h1}>Join SELL NOW</Text>

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <TextInput placeholder='Name' style={styles.input} />
            <AntIcon name="user" size={24} />
          </View>

          <View style={styles.formGroup}>
            <TextInput placeholder='Email' style={styles.input} />
            <AntIcon name="mail" size={24} />
          </View>

          <View style={styles.formGroup}>
            <TextInput placeholder='Password' style={styles.input} />
            <Pressable onPress={() => setTogglePassword(!togglePassword)}>
              {togglePassword ? <EntIcon name="eye" size={24} /> : <EntIcon name="eye-with-line" size={24} />}
            </Pressable>
          </View>

          <View style={GlobalStyles.flexRow}>
            <Pressable onPress={() => setToggleCheck(!toggleCheck)}>
              {toggleCheck ? <FontIcon name="checkbox-active" size={20} /> : <FontIcon name="checkbox-passive" size={20} />}
            </Pressable>
            <Text style={{ width: '90%', fontWeight: '600', color: '#000' }}>I Accept the term and Conditions & read the Privacy Policy</Text>
          </View>

          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText} >Create Account</Text>
          </TouchableOpacity>

          <View style={GlobalStyles.flexRow}>
            <View style={{ borderWidth: 1, borderColor: '#000', width: '35%' }} />
            <Text style={styles.small}>Or Continue with</Text>
            <View style={{ borderWidth: 1, borderColor: '#000', width: '35%' }} />
          </View>

          <View style={[GlobalStyles.flexRow, { gap: 50, justifyContent: 'center' }]}>
            <Pressable style={styles.iconContainer}>
              <AntIcon name="google" size={40} color="red" />
            </Pressable>
            <Pressable style={styles.iconContainer}>
            <AntIcon name="facebook-square" size={40} color="blue" />
            </Pressable>
            <Pressable style={styles.iconContainer}>
            <AntIcon name="apple1" size={40} color="#000" />
            </Pressable>          
          </View>

          <Text style={{ textAlign: 'center' }}>Already Have An Account?{' '}<Text style={{ color: 'blue' }}>Login</Text></Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  h1: { fontSize: 24, fontWeight: '600', color: '#000', textAlign: 'center' },
  small: { fontWeight: '600', color: '#000' },
  registerWrapper: { padding: 15, gap: 90, flex: 1 },
  form: { gap: 40 },
  input: { width: '90%' },
  formGroup: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#000' },
  cta: { backgroundColor: '#000', padding: 15, borderRadius: 30 },
  ctaText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  iconContainer: { backgroundColor: '#fff', padding: 13, borderRadius: 30 }
})