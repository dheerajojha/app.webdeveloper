/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome6';
import Color from '../Utils/Color';
const HomeScreen5: React.FC = () => {
  const [notification, setNotification] = useState<number>(4);
  const [address, setAddress] = useState<string>(
    'Shop JJ Melbourne Block No 118',
  );
  type productType = {
    id: number;
    image: string;
    name: string;
    price: number;
    liked: boolean;
  };
  const [productData, setProductData] = useState<productType[]>([
    {
      id: 1,
      image: require('../Assets/Images/shoe1.png'),
      name: "'Jordan Nike Plus'",
      price: 190,
      liked: false,
    },
    {
      id: 2,
      image: require('../Assets/Images/shoe2.png'),
      name: "'Jordan Nike'",
      price: 200,
      liked: false,
    },
    {
      id: 3,
      image: require('../Assets/Images/shoe3.png'),
      name: "'Jordan Nike Plus K'",
      price: 250,
      liked: false,
    },
    {
      id: 4,
      image: require('../Assets/Images/shoe4.png'),
      name: "'Jordan Nike Plus J'",
      price: 160,
      liked: false,
    },
  ]);

  type brandType = {
    image: string;
    name: string;
  };

  const brandData: brandType[] = [
    {
      name: 'adidas',
      image: require('../Assets/Images/logo1.png'),
    },
    {
      name: 'nike',
      image: require('../Assets/Images/logo2.png'),
    },
    {
      name: 'Poko',
      image: require('../Assets/Images/logo3.png'),
    },
    {
      name: 'Reebock',
      image: require('../Assets/Images/logo4.png'),
    },
  ];

  const handleLiked = (itemId: number) => {
    setProductData(prevData =>
      prevData.map(item =>
        item.id === itemId ? {...item, liked: !item.liked} : item,
      ),
    );
  };
  return (
    <ScrollView style={styles.shoeWrapper}>
      {/* header start */}
      <View style={styles.flexBetween}>
        <View style={styles.iconContainer}>
          <FontIcon name="bars" size={24} color={Color.blackColor} />
        </View>
        <Text style={styles.h1}>
          Dr<Text style={{color: Color.primaryColor}}>o</Text>ps
        </Text>
        <View style={styles.iconContainer}>
          <FontIcon name="bag-shopping" size={24} color={Color.blackColor} />
          <View style={styles.notificationContainer}>
            <Text style={{color: Color.whiteColor}}>{notification}</Text>
          </View>
        </View>
      </View>

      {/* search start */}

      <View style={styles.searchContainer}>
        <AntIcon name="search1" size={24} color={Color.blackColor} />
        <TextInput placeholder="Search" />
      </View>

      {/* address start */}

      <View style={styles.flexRow}>
        <FontIcon name="location-pin" color={Color.primaryColor} size={18} />
        <Text>{address}</Text>
      </View>

      {/* brand start */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {brandData.map((item, index) => (
          <View key={index} style={[styles.iconContainer, {marginRight: 20}]}>
            <Image source={item.image} style={{width: 50, height: 50}} />
          </View>
        ))}
      </ScrollView>

      {/* sponser start */}
      <View style={styles.sponserContainer}>
        <Image
          source={require('../Assets/Images/shoe2.png')}
          style={{transform: [{rotate: '-30deg'}], width: 180, height: 120}}
        />
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 5,
            padding: 5,
            alignItems: 'center',
          }}>
          <Text style={[styles.h2, {color: Color.whiteColor}]}>
            Your End Sale
          </Text>
          <Text style={[styles.h3, {color: Color.whiteColor}]}>
            Upto 50% Off
          </Text>
          <Pressable style={styles.cta}>
            <Text style={{color: Color.whiteColor}}>Shop Now</Text>
          </Pressable>
        </View>
      </View>

      {/* new arrival */}

      <View style={[styles.flexBetween, {marginBottom: 15}]}>
        <Text style={styles.h2}>New Arrival</Text>
        <Text style={styles.h3}>See All</Text>
      </View>

      {/* product start */}

      <View style={styles.cardContainer}>
        {productData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} />
            <Text style={styles.h3}>{item.name}</Text>
            <Text style={styles.h1}>${item.price}</Text>
            <Pressable
              style={[
                styles.iconContainer,
                {
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  backgroundColor: Color.whiteColor,
                },
              ]}
              onPress={() => {
                handleLiked(item.id);
              }}>
              <AntIcon
                name="heart"
                size={20}
                color={item.liked ? 'red' : Color.blackColor}
              />
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen5;

const styles = StyleSheet.create({
  shoeWrapper: {
    padding: 10,
    backgroundColor: Color.whiteColor,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: Color.grayColor,
    padding: 10,
    borderRadius: 50,
    marginBottom: 15,
  },
  notificationContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cta: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  h1: {fontSize: 18, fontWeight: '700', color: Color.blackColor},
  h2: {fontSize: 16, fontWeight: '600', color: Color.blackColor},
  h3: {fontSize: 14, fontWeight: '400', color: Color.blackColor},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.grayColor,
    gap: 5,
    padding: 5,
    borderRadius: 5,
    marginBottom: 15,
  },
  sponserContainer: {
    backgroundColor: Color.blackColor,
    borderRadius: 30,
    padding: 10,
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  card: {
    backgroundColor: Color.grayColor,
    borderRadius: 20,
    gap: 8,
    padding: 10,
    width: '48%',
  },
});
