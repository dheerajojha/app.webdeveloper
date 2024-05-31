import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import GlobalStyles from '../../Constants/GlobalStyles';
const {height, width} = Dimensions.get('window');
const TripDetailScreen = () => {
  const route: any = useRoute();
  const item = route.params.param;
  console.log(item);
  const navigation: any = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent />
      {/* image container start */}
      <View style={styles.tripdetailWrapper}>
        <ImageBackground
          source={item.image}
          style={styles.imageContainer}>
          <SafeAreaView style={GlobalStyles.flexBetween}>
            <View style={styles.iconContainer}>
              <AntIcon
                name="left"
                size={20}
                color="#000"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={styles.iconContainer}>
              <AntIcon name="heart" size={20} color="#000" />
            </View>
          </SafeAreaView>
          <View>
            <Text style={styles.h1}>{item.title}</Text>
          </View>
        </ImageBackground>
        {/* content container start */}
        <View style={{flex: 3, padding: 10, gap: 18}}>
          <Text style={styles.h2}>OverView</Text>
          <View style={[GlobalStyles.flexRow,{gap:20}]}>
          <View style={[GlobalStyles.flexRow,{gap:20}]}>
            <EntIcon name="stopwatch" size={28} color="orange"/>
           <View>
           <Text>DURATION</Text>
              <Text style={styles.h3}>{item.duration}</Text>
            </View>
           </View>

           <View style={[GlobalStyles.flexRow,{gap:20}]}>
            <AntIcon name="star" size={28} color="orange"/>
           <View>
              <Text>RATINGS</Text>
              <Text style={styles.h3}>{item.rating}</Text>
            </View>
           </View>
          </View>

          <Text style={styles.p}>{item.description}</Text>

          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TripDetailScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 40,
    width: '80%',
    color: '#fff',
  },
  h2: {fontSize: 20, fontWeight: '600', color: '#000'},
  h3: {fontSize: 18, fontWeight: '500', color: '#000'},
  p: {fontSize: 14, fontWeight: '400', lineHeight: 20, letterSpacing: 1},
  tripdetailWrapper: {backgroundColor: '#FAF9F6', flex: 1, gap: 18},
  imageContainer:{flex: 7, justifyContent: 'space-between', padding: 10},
  iconContainer: {backgroundColor: '#fff', padding: 10, borderRadius: 30},
  cta: {backgroundColor: '#000', padding: 20, borderRadius: 10},
  ctaText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
