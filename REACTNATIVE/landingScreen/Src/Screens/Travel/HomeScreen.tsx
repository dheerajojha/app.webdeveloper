/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontIcon from 'react-native-vector-icons/Fontisto';
import Color from '../../Utils/Color';
import Footer from '../../Components/Footer';
import {useNavigation} from '@react-navigation/native';
const HomeScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const popularBtn = ['Most Viewed', 'NearBy', 'Latest'];
  type placesType = {
    title: string;
    subTitle: string;
    liked: boolean;
    rating: number;
    image: string;
  };
  const [places, setPlaces] = useState<placesType[]>([
    {
      title: 'Mount Furji',
      subTitle: 'Tokyo Japan',
      liked: false,
      rating: 4,
      image: require('../../Assets/Images/tokyo1.jpg'),
    },
    {
      title: 'Mount Furji',
      subTitle: 'Tokyo Japan',
      liked: false,
      rating: 4,
      image: require('../../Assets/Images/tokyo2.jpg'),
    },
    {
      title: 'Mount Furji',
      subTitle: 'Tokyo Japan',
      liked: false,
      rating: 4,
      image: require('../../Assets/Images/tokyo3.jpg'),
    },
  ]);
  return (
    <>
      <SafeAreaView style={styles.homeWrapper}>
        {/* header start */}
        <View style={styles.flexBetween}>
          <View>
            <Text style={styles.h1}>uiux_app_webdeveloper👋🏻</Text>
            <Text>Welcome To Travel.io</Text>
          </View>
          <Image
            source={require('../../Assets/Images/user.png')}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </View>

        {/* search start */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search Places" style={{flex: 90}} />
          <View style={styles.iconContainer}>
            <FontIcon name="equalizer" size={24} color={Color.blackColor} />
          </View>
        </View>

        {/* popular places start */}
        <View style={styles.flexBetween}>
          <Text style={styles.h1}>Popular Places</Text>
          <Text style={styles.h3}>View All</Text>
        </View>

        <View style={styles.flexRow}>
          {popularBtn.map((item, index) => (
            <Pressable style={styles.cta} key={index}>
              <Text style={styles.ctaText}>{item}</Text>
            </Pressable>
          ))}
        </View>

        {/* popular places card */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({item, index}) => (
            <View key={index} style={{marginEnd: 10}}>
              <Image
                source={item.image}
                style={{width: 250, height: 400, borderRadius: 20}}
              />
              <View
                style={{
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <FontIcon name="heart" color={Color.whiteColor} size={20} />
              </View>
              <Pressable
                style={styles.card}
                onPress={() => {
                  navigation.navigate('Single', {item});
                }}>
                <Text
                  style={[
                    styles.h2,
                    {color: Color.whiteColor, marginRight: 100},
                  ]}>
                  {item.title}
                </Text>
                <View style={styles.flexBetween}>
                  <View style={[styles.flexRow, {marginRight: 60}]}>
                    <FontIcon name="map" size={16} color={Color.whiteColor} />
                    <Text style={{color: Color.whiteColor}}>
                      {item.subTitle}
                    </Text>
                  </View>
                  <FontIcon name="star" size={18} color={Color.whiteColor} />
                </View>
              </Pressable>
            </View>
          )}
        />
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 18, fontWeight: '600', color: Color.blackColor},
  h2: {fontSize: 16, fontWeight: '600', color: Color.blackColor},
  h3: {fontSize: 14, fontWeight: '400', color: Color.blackColor},
  homeWrapper: {
    padding: 10,
    backgroundColor: Color.whiteColor,
    gap: 15,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.grayColor,
    padding: 5,
    borderColor: Color.blackColor,
    borderWidth: 1,
    borderRadius: 4,
  },
  iconContainer: {
    flex: 10,
    borderLeftWidth: 1,
    borderColor: Color.blackColor,
    paddingLeft: 10,
  },
  cta: {
    backgroundColor: Color.blackColor,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  ctaText: {
    color: Color.whiteColor,
  },
  card: {
    height: 80,
    position: 'absolute',
    bottom: 10,
    left: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha (4th parameter) to control opacity
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
});
