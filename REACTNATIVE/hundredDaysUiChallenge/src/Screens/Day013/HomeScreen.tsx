/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../../Components/Day013/Footer';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import GlobalColors from '../../Constants/GlobalColors';
import GlobalStyles from '../../Constants/GlobalStyles';
const {height, width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const tabData: string[] = ['Nearby', 'Recommended', 'Upcomming'];
  interface flatType {
    image: string;
    title: string;
    description: string;
    price: number;
    rotate: number;
  }
  const [flat, setFlat] = useState<flatType[]>([
    {
      image: require('../../Assets/Images/Day013/pic1.jpg'),
      title: 'Lakeshshore Blvd West',
      description: '4bd 2ba 1493m',
      price: 1680,
      rotate: 360,
    },
    {
      image: require('../../Assets/Images/Day013/pic2.jpg'),
      title: 'Lakeshshore Blvd East',
      description: '4bd 2ba 1493m',
      price: 1780,
      rotate: 360,
    },
    {
      image: require('../../Assets/Images/Day013/pic3.jpg'),
      title: 'Lakeshshore Blvd North',
      description: '4bd 2ba 1493m',
      price: 1380,
      rotate: 360,
    },
    {
      image: require('../../Assets/Images/Day013/pic4.jpg'),
      title: 'Lakeshshore Blvd South',
      description: '4bd 2ba 1493m',
      price: 1280,
      rotate: 360,
    },
  ]);
  return (
    <>
      <StatusBar
        backgroundColor={GlobalColors.whiteColor}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.homewrapper}>
        {/* header start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h1}>HOMECO</Text>
          <View style={GlobalStyles.flexRow}>
            <AntIcon name="bells" size={20} />
            <LottieView
              source={require('../../Assets/Animations/user.json')}
              style={{width: 80, height: 60}}
              autoPlay={true}
              loop={true}
            />
          </View>
        </View>

        {/* search start */}
        <View style={[GlobalStyles.flexBetween, styles.searchContainer]}>
          <AntIcon name="search1" size={24} />
          <View>
            <Text style={styles.h2}>Find Your view</Text>
            <Text>Appartment, House, Lands & More</Text>
          </View>
          <AntIcon name="filter" size={24} />
        </View>

        {/* tab start */}
        <View style={[GlobalStyles.flexBetween, styles.tabContainer]}>
          {tabData.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </View>

        {/* flat ard start */}
        <FlatList
          data={flat}
          renderItem={({item, index}) => (
            <ImageBackground
              key={index}
              source={item.image}
              style={styles.imageBackground}
              imageStyle={{
                borderRadius: 20,
              }}>
              <View style={[GlobalStyles.flexRow, styles.rotateContainer]}>
                <MaterialIcon
                  name="rotate-3d"
                  color={GlobalColors.whiteColor}
                  size={20}
                />
                <Text style={{color: GlobalColors.whiteColor}}>
                  {item.rotate}*
                </Text>
              </View>
              {/* absolute card */}
              <TouchableOpacity
                style={[styles.absoluteCard, GlobalStyles.flexBetween]}>
                <View style={{gap: 5}}>
                  <Text style={styles.h2}>{item.title}</Text>
                  <View style={GlobalStyles.flexRow}>
                    <AntIcon name="home" />
                    <Text>{item.description}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.h2}>${item.price}</Text>
                  <Text style={{textAlign: 'center'}}>Month</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          )}
        />
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 22,
    fontWeight: '700',
    color: GlobalColors.blackColor,
    borderWidth: 1,
    borderColor: GlobalColors.grayColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  h2: {fontSize: 18, fontWeight: '600', color: GlobalColors.blackColor},
  h3: {fontSize: 16, fontWeight: '600', color: GlobalColors.blackColor},
  homewrapper: {
    padding: 10,
    flex: 1,
    gap: 20,
    backgroundColor: GlobalColors.whiteColor,
  },
  searchContainer: {
    backgroundColor: GlobalColors.grayColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  tabContainer: {
    borderColor: GlobalColors.grayColor,
    borderWidth: 1,
    padding: 15,
    borderRadius: 30,
  },
  imageBackground: {
    marginBottom: 20,
    height: height * 0.4,
    width: width * 0.95,
    resizeMode: 'cover',
  },
  rotateContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  absoluteCard: {
    backgroundColor: GlobalColors.whiteColor,
    position: 'absolute',
    bottom: 5,
    left: 8,
    padding: 10,
    borderRadius: 10,
    width: width * 0.9,
    height: height * 0.12,
  },
});
