import { StatusBar, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
const { height, width } = Dimensions.get('window')
import {useNavigation} from "@react-navigation/native"
const GetstartedScreen = () => {
  const navigation:any = useNavigation()

  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'default'} />
      <SafeAreaView style={styles.getstartedWrapper}>
        <View style={{ flex: 1 }}>
          <LottieView style={{ height: height / 2, width: width }} source={require('../../Assets/Animations/banking.json')} autoPlay loop />
        </View>
        <View style={styles.getstartedtext}>
          <View>
            <Text style={styles.h1}>Smart Banking for smart people</Text>
            <Text style={styles.p}>Our financial Banking App Revolution the way we manage your finance</Text>
          </View>
          <TouchableOpacity style={styles.cta} onPress={()=>navigation.navigate('bottomtab')}>
            <Text style={styles.ctaText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

export default GetstartedScreen

const styles = StyleSheet.create({
  h1: { fontSize: 40, color: '#fff', fontWeight: '700', textAlign: 'center' },
  p: { fontSize: 16, color: '#fff', fontWeight: '400', textAlign: 'center',lineHeight:20 },
  getstartedWrapper: { backgroundColor: '#1a76ff', flex: 1, gap: 20 },
  getstartedtext: { flex: 1, alignItems: 'center', padding: 10,justifyContent:'space-between' },
  cta: { backgroundColor: '#ffbb02', width: width * 0.9, paddingVertical: 20, borderRadius: 30, },
  ctaText: { textAlign: 'center', color: '#ffffff', fontWeight: '600' },
})