import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
const {height, width} = Dimensions.get('window');
import {useNavigation, useRoute} from '@react-navigation/native';
const CourseDetailScreen = () => {
  const route: any = useRoute();
  const item = route.params.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.homeDetailWrapper}>
        <View style={GlobalStyles.flexBetween}>
          <AntIcon name="left" size={24} onPress={() => navigation.goBack()} />
          <AntIcon name="book" size={24} />
        </View>

        <View>
          <Text>{item.user}</Text>
          <Text style={styles.h1}>{item.title}</Text>
        </View>

        <View style={{gap: 15}}>
          <Image
            source={item.image}
            style={{width: width, height: height *0.4}}
          />
          <Text style={{lineHeight: 22, fontSize: 14}}>{item.description}</Text>

          {/* duration/user */}
          <View style={GlobalStyles.flexBetween}>
            <View style={{gap:5}}>
              <Text>Total Video Duration</Text>
              <Text style={styles.h3}>{item.duration}</Text>
            </View>

            <View style={{gap:5}}>
            <Text>Lecturer</Text>
            <Text style={styles.h3}>{item.user}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* absolute footer start */}
      <View style={[GlobalStyles.flexBetween, styles.absoluteContainer]}>
        <View>
          <Text style={styles.h3}>${item.price}</Text>
        </View>

        <TouchableOpacity style={styles.cta}>
          <Text style={styles.ctaText}>buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 28, color: 'black', fontWeight: '600', width: '70%'},
  h2: {fontSize: 22, color: 'black', fontWeight: '600'},
  h3: {fontSize: 17, color: 'black', fontWeight: '500'},
  homeDetailWrapper: {padding: 15,  backgroundColor: '#FAF9F6', flex: 1,gap:15},
  absoluteContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  ctaText:{color:'white'},
  cta:{paddingHorizontal:18,paddingVertical:12,backgroundColor:'black',borderRadius:30}
});
