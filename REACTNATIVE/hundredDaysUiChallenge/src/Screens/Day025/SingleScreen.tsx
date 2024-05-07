import { Image, StyleSheet, Text, View,Dimensions, StatusBar,TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import {useRoute,useNavigation} from "@react-navigation/native";
import AntIcon from "react-native-vector-icons/AntDesign";
import EntIcon from "react-native-vector-icons/Entypo";
import GlobalStyles from '../../Constants/GlobalStyles';
import GlobalColors from '../../Constants/GlobalColors';

const{height,width}=Dimensions.get("window");

const SingleScreen:React.FC = () => {
    const route:any = useRoute()
    const navigation:any = useNavigation()
    const data = route.params.item;

  return (
   <>
   <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent/>
    <View style={styles.singleScreenWrapper}>
        <View style={{position:'relative',alignItems:'center'}}>
            <View style={styles.headerContainer}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
               <AntIcon name="left" size={20} color="white" />
               </TouchableOpacity>
                <EntIcon name="dots-three-vertical" size={20} color="white"/>
            </View>
            <Image source={{uri:data.image}} style={{width:width,height:height/2}}/>
            <View style={styles.absoluteCard}>
                <Text style={styles.h1}>{data.title}</Text>
            </View>
        </View>
     {/* content start */}

     <View style={styles.contentContainer}>
        <Text style={styles.h2}>Description</Text>
        <Text style={styles.p}>{data.description}</Text>
        <View style={GlobalStyles.flexBetween}>
           <View>
           <Text>Total Cost</Text>
            <Text style={styles.h2}>${data.cost}</Text>
           </View>
           <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Book Now</Text>
           </TouchableOpacity>
        </View>
     </View>
    </View>
   </>
  )
}

export default SingleScreen

const styles = StyleSheet.create({
    h1:{fontSize:18,color:'black',fontWeight:'600'},
    h2:{fontSize:16,color:'black',fontWeight:'600'},
    p:{letterSpacing:1.5,lineHeight:18},
    singleScreenWrapper:{gap:20},
    headerContainer:{position:'absolute',top:40,left:10,zIndex:1000,justifyContent:'space-between',flexDirection:'row',width:'90%'},
    absoluteCard:{backgroundColor:'white',width:width*0.8,height:50,borderRadius:10,justifyContent:'center',alignItems:'center',position:'absolute',bottom:-30},
    contentContainer:{padding:20,gap:20},
    cta:{backgroundColor:GlobalColors.primaryColor,paddingVertical:11,paddingHorizontal:18,borderRadius:20},
    ctaText:{color:GlobalColors.whiteColor,fontWeight:'600'}
})
