import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import FontIstoIcon from 'react-native-vector-icons/Fontisto';
const HomeScreen4 = () => {
  type categoryType = {
    name: string;
    image: string;
  };
  const categoryData: categoryType[] = [
    {
      name: 'Burger Jo',
      image: require('../Assets/Images/burger1.png'),
    },
    {
      name: 'Burger Ju',
      image: require('../Assets/Images/burger2.png'),
    },
    {
      name: 'Burger Hu',
      image: require('../Assets/Images/burger3.png'),
    },
    {
      name: 'Burger Ku',
      image: require('../Assets/Images/burger4.png'),
    },
  ];

  type productType = {
    name: string;
    category: string;
    image: string;
    ratings: number;
    price: number;
  };
  const productData: productType[] = [
    {
      name: 'Beef burger',
      category: 'Non Veg',
      image: require('../Assets/Images/burger1.png'),
      ratings: 4,
      price: 10,
    },
    {
      name: 'Chicken burger',
      category: 'Non Veg Ki',
      image: require('../Assets/Images/burger2.png'),
      ratings: 5,
      price: 17,
    },
    {
      name: 'Kabab burger',
      category: 'Non Veg Ju',
      image: require('../Assets/Images/burger3.png'),
      ratings: 3,
      price: 19,
    },
    {
      name: 'Gusiya burger',
      category: 'Non Veg Hu',
      image: require('../Assets/Images/burger4.png'),
      ratings: 5,
      price: 16,
    },
  ];
  return (
    <SafeAreaView style={styles.dishWrapper}>
      {/* header start */}
      <View style={styles.flexBetween}>
        <View style={styles.flexRow}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon name="bars" size={24} color={'#fff'} />
          </View>
          <Text>Foodie</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon name="bell" size={24} color={'#fff'} />
          <View style={styles.notificationContainer}>
            <Text style={{color: '#fff'}}>2</Text>
          </View>
        </View>
      </View>
      {/* search start */}

      <View style={styles.searchContainer}>
        <View style={styles.flexRow}>
          <FontIstoIcon name="search" size={24} color={'#fff'} />
          <TextInput placeholder="Search Food" placeholderTextColor={'#fff'} />
        </View>
        <FontIstoIcon name="equalizer" size={24} color={'#fff'} />
      </View>

      {/* category start */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          horizontal
          data={categoryData}
          renderItem={({item}) => (
            <View style={styles.categoryCard}>
              <Image source={item.image} style={{width: 40, height: 40}} />
              <Text style={{color: '#fff'}}>{item.name}</Text>
            </View>
          )}
        />
      </ScrollView>

      {/* product 1 start */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          horizontal
          data={productData}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Image source={item.image} style={{width: 110, height: 110}} />
              </View>
              <Text style={styles.h1}>{item.name}</Text>
              <Text style={styles.h3}>{item.category} ❤️‍🔥</Text>
              <View style={styles.divider} />
              <View style={styles.flexBetween}>
                <Text style={styles.h2}>{item.ratings}</Text>
                <Text style={styles.h2}>${item.price}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>

      {/* product 2 start */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          horizontal
          data={productData}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                <Image source={item.image} style={{width: 110, height: 110}} />
              </View>
              <Text style={styles.h1}>{item.name}</Text>
              <Text style={styles.h3}>{item.category} 🧨</Text>
              <View style={styles.divider} />
              <View style={styles.flexBetween}>
                <Text style={styles.h2}>{item.ratings}</Text>
                <Text style={styles.h2}>${item.price}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen4;

const styles = StyleSheet.create({
  dishWrapper: {padding: 10, backgroundColor: '#0f0d10', gap: 15},
  h1: {fontSize: 20, color: '#fff', fontWeight: '700'},
  h2: {fontSize: 16, color: '#fff', fontWeight: '600'},
  h3: {fontSize: 14, color: '#fff', fontWeight: '300'},
  iconContainer: {padding: 10, backgroundColor: '#1a1b1a', borderRadius: 50},
  notificationContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#1a1b1a',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  divider: {borderWidth: 2, borderColor: '#fff', margin: 10},
  card: {
    backgroundColor: '#1a1b1a',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 170,
    gap: 10,
  },
  categoryCard: {
    backgroundColor: '#1a1b1a',
    gap: 5,
    alignItems: 'center',
    width: 80,
    marginEnd: 15,
    borderRadius: 15,
    padding: 5,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
