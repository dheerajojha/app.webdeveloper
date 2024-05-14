import { StyleSheet } from "react-native";
import colors from "./src/Constants/colors"

const gStyles = StyleSheet.create({
    p:{fontSize:16,fontWeight:'300',lineHeight:24},
    small:{fontSize:14,fontWeight:'600',color:colors.primary},
    input:{width:'100%',borderWidth:1,borderColor:'gray',padding:10,borderRadius:5},
    cta:{backgroundColor:colors.primary,padding:15,width:'100%',borderRadius:30},
    ctaText:{color:'white',textAlign:'center',fontWeight:'600',fontSize:16},
    ctaOutline:{backgroundColor:'white',padding:15,width:'100%',borderRadius:30,borderColor:colors.primary,borderWidth:2},
    ctaOutlineText:{color:'black',textAlign:'center',fontWeight:'600',fontSize:16},
    flexBetween:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    flexRow:{flexDirection:'row',alignItems:'center',gap:8},
})

export default gStyles;