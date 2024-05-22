import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-gifted-charts';
import {useRoute} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
const {height, width} = Dimensions.get('window');
import {useNavigation} from "@react-navigation/native"

const InvestementDetailScreen: React.FC = () => {
  const navigation:any = useNavigation()
  const route: any = useRoute();
  const item = route.params.params;
  const data = [
    {value: 50},
    {value: 80},
    {value: 30},
    {value: 70},
    {value: 70},
    {value: 70},
    {value: 100},
    
  ];

  return (
     <>
      {/* header start */}
      <View
        style={[
          GlobalStyles.flexBetween,
          styles.headerContainer,
        ]}>
        <AntIcon name="left" size={24} color="black" onPress={()=>(navigation.goBack())} />
        <Text style={styles.h1}>{item?.title}</Text>
        <AntIcon name="heart" size={24} color="black" />
      </View>
    
    <SafeAreaView style={styles.investmentDetailWrapper}>
      <View style={GlobalStyles.flexBetween}>
        <Text style={{fontSize:40,color:'black',fontWeight:'600',}}>${item.rate}</Text>
       <View style={{backgroundColor:'black',padding:10,borderRadius:30}}>
       <FeatherIcon name="trending-up" size={28} color="white"/>
       </View>
      </View>
      <LineChart data={data} areaChart height={height * 0.5} width={width} />

      {/* content start */}
      <View style={styles.contentContainer}>
        <Text style={styles.h1}>About Company</Text>
        <Text style={styles.p}>{item?.description}</Text>
        <View style={GlobalStyles.flexRow}>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>sell</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctaOutline}>
            <Text style={styles.ctaOutlineText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
     </>
  );
};

export default InvestementDetailScreen;

const styles = StyleSheet.create({
  investmentDetailWrapper: {gap: 14,padding:10},
  h1: {fontSize: 18, color: 'black', fontWeight: '500'},
  p: {fontSize: 16, color: 'black', fontWeight: '300',lineHeight:24},
  headerContainer:{backgroundColor: 'white', padding: 10},
  contentContainer: {padding: 10, gap: 15},
  cta: {padding: 15, flex: 1, backgroundColor: 'black', borderRadius: 30},
  ctaText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  ctaOutline: {padding: 15, flex: 1, borderRadius: 30, borderWidth: 1},
  ctaOutlineText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
