/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';
import {React, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Color from '../Utils/Color';
const UlxScreen: React.FC = () => {
  type categoryType = {
    icon: string;
    title: string;
  };
  const [categoryData, setCategoryData] = useState<categoryType[]>([
    {
      icon: require('../Assets/Images/bike.png'),
      title: 'Bike',
    },
    {
      icon: require('../Assets/Images/pc.png'),
      title: 'Laptop',
    },
    {
      icon: require('../Assets/Images/card.png'),
      title: 'Car',
    },
    {
      icon: require('../Assets/Images/furniture.png'),
      title: 'Furniture',
    },
    {
      icon: require('../Assets/Images/house.png'),
      title: 'House',
    },
    {
      icon: require('../Assets/Images/mobile.png'),
      title: 'Mobile',
    },
  ]);
  type productType = {
    name: string;
    description: string;
    price: number;
  };

  const [product, setProduct] = useState<productType[]>([
    {
      name: 'Iphone 14 Pro Max',
      description: 'New phone bought 4 Month Ago',
      price: 70000,
    },
    {
      name: 'Iphone 13 Pro Max',
      description: 'New phone bought 2 Month Ago',
      price: 60000,
    },
    {
      name: 'Iphone 12 Pro Max',
      description: 'New phone bought 3 Month Ago',
      price: 50000,
    },
  ]);

  return (
    <SafeAreaView style={styles.ulxWrapper}>
      <Text style={styles.h1}>ULX Here</Text>
      {/* search start */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search Items Here" />
        <AntIcon name="search1" size={20} />
      </View>
      {/* catgory start */}
      <View>
        <Text style={styles.h2}>What are you Looking For?</Text>
      </View>

      <FlatList
        numColumns={3}
        data={categoryData}
        renderItem={({item}) => (
          <Pressable style={styles.card}>
            <Image source={item.icon} style={{width: 50, height: 50}} />
            <Text style={styles.h4}>{item.title}</Text>
          </Pressable>
        )}
      />
      {/* product start */}
      <View>
        <Text style={styles.h2}>Posted Items</Text>
      </View>

      <FlatList
        data={product}
        renderItem={({item}) => (
          <Pressable style={styles.productCard}>
            <Image
              source={require('../Assets/Images/image.png')}
              style={{width: 80, height: 80}}
            />
            <View style={{gap: 3}}>
              <Text style={styles.h2}>{item.name}</Text>
              <Text style={styles.h4}>{item.description}</Text>
              <Text style={[styles.h2, {color: 'green'}]}>
                INR {item.price}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default UlxScreen;

const styles = StyleSheet.create({
  ulxWrapper: {
    padding: 15,
    backgroundColor: Color.whiteColor,
    gap: 15,
  },
  flexRow: {flexDirection: 'row', alignItems: 'center', gap: 5},
  h1: {fontSize: 20, fontWeight: '700', color: Color.blackColor},
  h2: {fontSize: 18, fontWeight: '600', color: Color.blackColor},
  h3: {fontSize: 16, fontWeight: '600', color: Color.blackColor},
  h4: {fontSize: 14, fontWeight: '400', color: Color.blackColor},
  searchContainer: {
    backgroundColor: Color.grayColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 3,
  },

  card: {
    backgroundColor: Color.grayColor,
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 5,
  },

  productCard: {
    backgroundColor: Color.grayColor,
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 5,
  },
});
