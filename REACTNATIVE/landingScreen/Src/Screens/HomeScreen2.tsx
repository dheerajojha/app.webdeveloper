/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
const HomeScreen2: React.FC = () => {
  type headerType = String[];
  const headerData: headerType = ['All', 'Indoor', 'Outdoor', 'Garden'];
  type plantType = {
    title: string;
    rating: number;
    price: number;
    image: any;
  };
  const plantData: plantType[] = [
    {
      title: 'Oscar Plant',
      rating: 4,
      price: 2000,
      image: require('../Assets/Images/pic0.png'),
    },
    {
      title: 'Twinty Plant',
      rating: 4,
      price: 2000,
      image: require('../Assets/Images/pic1.png'),
    },
    {
      title: 'Lesgui Plant',
      rating: 4,
      price: 2000,
      image: require('../Assets/Images/pic2.png'),
    },
  ];

  type popularPlantType = {
    title: string;
    rating: number;
    price: number;
    image: any;
  };
  const popularPlantData: popularPlantType[] = [
    {
      title: 'Oscar Plant',
      rating: 4,
      price: 2000,
      image: require('../Assets/Images/plant4.png'),
    },
    {
      title: 'Twinty Plant',
      rating: 4,
      price: 2000,
      image: require('../Assets/Images/plant5.png'),
    },
    {
      title: 'Lesgui Plant',
      rating: 4,
      price: 2000,
      image: require('../Assets/Images/plant6.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.home2Wrapper}>
      <View style={styles.flexBetween}>
        <View>
          <Text style={styles.h1}>Exclusive Plants</Text>
          <Text>For Your Hobby</Text>
        </View>
        <Image
          source={require('../Assets/Images/person-4.png')}
          style={{width: 60, height: 60}}
        />
      </View>
      {/* header start */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {headerData.map((item, index) => (
          <View style={styles.headerBox}>
            <Text style={{color: '#fff'}} key={index}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.flexBetween}>
        <Text style={styles.h2}>Recommended</Text>
        <Text>See All</Text>
      </View>

      {/* plant recommended start */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardContainer}>
        {plantData.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.flexCenter}>
              <Image source={item.image} style={{width: 100, height: 100}} />
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  backgroundColor: '#114f5a4c',
                  width: 100,
                  height: 100,
                  zIndex: -1,
                  borderRadius: 20,
                }}
              />
            </View>
            <Text style={styles.h2}>{item.title}</Text>
            <Text>
              {item.rating}
              <AntIcon name="star" size={16} color={'yellow'} />
            </Text>
            <View style={styles.flexBetween}>
              <Text>${item.price}</Text>
              <AntIcon
                name="plus"
                size={20}
                color={'white'}
                style={{
                  backgroundColor: '#114F5A',
                  padding: 4,
                  borderRadius: 25,
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* popular recommended start */}

      <View style={styles.flexBetween}>
        <Text style={styles.h2}>Polular Plants</Text>
        <Text>See All</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularPlantData.map((item, index) => (
          <View style={styles.popularCard} key={index}>
            <View>
              <Image source={item.image} style={{width: 100, height: 100}} />
            </View>
            <View>
              <Text style={styles.h2}>{item.title}</Text>
              <Text>
                {item.rating} <AntIcon name="star" size={18} color={'yellow'} />
              </Text>
              <View style={styles.flexBetween}>
                <Text>${item.price}</Text>
                <AntIcon
                  name="plus"
                  size={20}
                  color={'white'}
                  style={{
                    backgroundColor: '#114F5A',
                    padding: 4,
                    borderRadius: 25,
                  }}
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  home2Wrapper: {padding: 15, backgroundColor: '#F7F8FB', gap: 20},
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  h1: {fontSize: 20, color: '#114F5A', fontWeight: '600'},
  h2: {fontSize: 17, color: '#114F5A', fontWeight: '600'},
  headerBox: {
    backgroundColor: '#114F5A',
    padding: 5,
    height: 50,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginEnd: 10,
  },
  cardContainer: {},
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginEnd: 20,
    borderRadius: 20,
    width: 180,
    height: 240,
    gap: 10,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  popularCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginEnd: 20,
    borderRadius: 20,
    width: 280,
    height: 180,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 5,
  },
});
