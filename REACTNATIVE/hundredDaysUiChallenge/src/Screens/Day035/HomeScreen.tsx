import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from "react-native-vector-icons/AntDesign"
import FeatherIcon from "react-native-vector-icons/Feather"
import EntIcon from "react-native-vector-icons/Entypo"
import GlobalStyles from '../../Constants/GlobalStyles'
import LottieView from 'lottie-react-native'
import {useNavigation} from "@react-navigation/native"
const HomeScreen = () => {
  const navigation:any = useNavigation()
  return (
    <SafeAreaView style={styles.homeWrapper}>
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <View style={GlobalStyles.flexRow}>
          <LottieView source={require('../../Assets/Animations/user.json')} loop={true} autoPlay={true} style={{width:80,height:80}}/>
          <View >
            <Text style={styles.h2}>Jason Green</Text>
            <Text>Jampra id</Text>
          </View>
        </View>
     <Pressable style={styles.iconContainer}>
     <AntIcon name='bells' size={20} />
     </Pressable>
      </View>

      <View style={{ backgroundColor: '#f44147', padding: 30, borderRadius: 20, }}>
        <Text style={{ color: '#fff' }}>Your Balance</Text>
        <Text style={styles.h1}>$7,39733</Text>
      </View>

      <Text style={styles.h2}>Track your shiping</Text>
      <View style={[GlobalStyles.flexRow, { borderWidth: 1, borderColor: 'gray', padding: 6, borderRadius: 30 }]}>
        <AntIcon name='search1' size={24} />
        <TextInput placeholder='Search Your Favorite songs' style={{ width: '76%' }} />
        <Pressable style={{ backgroundColor: '#f44147', padding: 10, borderRadius: 30 }}>
          <AntIcon name='filter' size={24} color='#fff' />
        </Pressable>
      </View>

      <View style={GlobalStyles.flexRow}>
        <Pressable style={[styles.card,{height:100}]}>
          <View style={styles.iconContainer}>
            <FeatherIcon name='package' color="#f44147" size={24} />
          </View>
          <Text>Send Package</Text>
        </Pressable>


        <Pressable style={[styles.card,{height:100}]}>
          <View style={styles.iconContainer}>
            <EntIcon name='price-tag' color="#f44147" size={24} />
          </View>
          <Text>Price Check</Text>
        </Pressable>
      </View>

      <View style={GlobalStyles.flexBetween}>
        <Text style={styles.h2}>Current Tracking</Text>
        <Text>See All</Text>
      </View>

      <TouchableOpacity onPress={()=>(navigation.navigate('pickupdetail'))} style={[styles.card,GlobalStyles.flexBetween]}>
        <View style={{ gap: 20 }}>
          <Pressable style={styles.buttonContainer}>
            <Text style={{color:'#fff'}}>View All</Text>
          </Pressable>
          <Text style={styles.h2}>Macbook Pro(12/02/200)</Text>
          <Text>#9388703039-3903392</Text>
        </View>
        <Image source={require('../../Assets/Images/Day035/box.png')} style={{maxHeight:130,maxWidth:130}} />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  h1: { fontSize: 28, fontWeight: '600', color: '#fff' },
  h2: { fontSize: 20, fontWeight: '500', color: '#000' },
  homeWrapper: { padding: 10, flex: 1, backgroundColor: '#fff', gap: 20 },
  card: {elevation:2,shadowColor:'rgba(255,255,255,0.25)', padding: 10, borderRadius: 5, borderColor: 'gray', borderWidth: 1, flex: 1, flexDirection: 'row', alignItems: 'center', gap: 5 },
  iconContainer: { padding: 10, backgroundColor: '#f1f2f3', borderRadius: 30 },
  buttonContainer:{backgroundColor:'#000',borderRadius:30,width:80,paddingVertical:10,paddingHorizontal:12}
})