import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const {height, width} = Dimensions.get('window');
const HomeScreen = () => {
  const {cart} = useSelector((state: any) => state.cart31);
  const navigation: any = useNavigation();
  const [category, setCategory] = useState([
    {
      id: 1,
      title: 'Radio',
    },
    {
      id: 2,
      title: 'Mike',
    },
    {
      id: 3,
      title: 'Earbuds',
    },
    {
      id: 4,
      title: 'Earphones',
    },
    {
      id: 5,
      title: 'Joystick',
    },
  ]);
  const [categoryActive, setCategoryActive] = useState();
  const categoryActiveHandler = (id: any) => {
    setCategoryActive(id);
  };

  const [product, setProduct] = useState([
    {
      id: 1,
      title: 'Radio1',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 1,
      image: require('../../Assets/Images/Day031/pic1.png'),
      price: 200,
    },
    {
      id: 2,
      title: 'Radio1',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 1,
      image: require('../../Assets/Images/Day031/pic2.png'),
      price: 100,
    },
    {
      id: 3,
      title: 'Radio1',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 1,
      image: require('../../Assets/Images/Day031/pic3.png'),
      price: 100,
    },
    {
      id: 4,
      title: 'Radio1',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 1,
      image: require('../../Assets/Images/Day031/pic4.png'),
      price: 100,
    },
    {
      id: 5,
      title: 'Mike1',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 2,
      image: require('../../Assets/Images/Day031/pic5.png'),
      price: 100,
    },
    {
      id: 6,
      title: 'Mike2',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 2,
      image: require('../../Assets/Images/Day031/pic6.png'),
      price: 100,
    },
    {
      id: 7,
      title: 'Mike3',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 2,
      image: require('../../Assets/Images/Day031/pic7.png'),
      price: 100,
    },
    {
      id: 8,
      title: 'Earbud1',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 3,
      image: require('../../Assets/Images/Day031/pic8.png'),
      price: 100,
    },
    {
      id: 9,
      title: 'Earbud2',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 3,
      image: require('../../Assets/Images/Day031/pic9.png'),
      price: 100,
    },
    {
      id: 10,
      title: 'Earbud',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 3,
      image: require('../../Assets/Images/Day031/pic10.png'),
      price: 100,
    },
    {
      id: 11,
      title: 'Earphone1',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 4,
      image: require('../../Assets/Images/Day031/pic11.png'),
      price: 100,
    },
    {
      id: 12,
      title: 'Earphone2',
      description:
        'this is all about radio description and all special speification about this product',
      rating: 1.2,
      categoryId: 4,
      image: require('../../Assets/Images/Day031/pic12.png'),
      price: 100,
    },
  ]);
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <Text style={styles.h2}>Discover</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Cart')}>
          <AntIcon name="shoppingcart" size={24} color="#000" />
          <View style={styles.notificationContainer}>
            <Text style={{color:'#fff'}}>{cart.length}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* search start */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search Product" />
        <AntIcon name="search1" size={24} />
      </View>

      {/* banner start */}
      <View style={styles.bannerContainer}>
        <View style={{gap: 10}}>
          <Text style={styles.h1}>Clearance Sales</Text>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Upto 50% Off</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../Assets/Images/Day031/phone.png')}
          style={{width: 200, height: 200, objectFit: 'fill'}}
        />
      </View>

      {/* category start */}
      <View style={GlobalStyles.flexBetween}>
        <Text style={styles.h2}>Categories</Text>
        <Text style={styles.span}>See All</Text>
      </View>

      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.categoryContainer,
              item.id == categoryActive && {backgroundColor: '#19c563'},
            ]}
            onPress={() => categoryActiveHandler(item.id)}>
            <Text
              style={[styles.h3, item.id == categoryActive && {color: '#fff'}]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* product card start */}
      <ScrollView
        contentContainerStyle={styles.cardContainer}
        showsVerticalScrollIndicator={false}>
        {product
          .filter(item => item.categoryId == categoryActive)
          .map(val => (
            <TouchableOpacity
              key={val.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate('ProductDetail', {params: val})
              }>
              <Image source={val.image} style={{width: '100%', height: 200}} />
              <View style={GlobalStyles.flexBetween}>
                <View>
                  <Text style={[styles.h3, {color: 'gray'}]}>{val.title}</Text>
                  <Text style={styles.h2}>${val.price}</Text>
                </View>
                <Text>⭐{val.rating}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, fontWeight: '600', width: '80%', color: '#fff'},
  h2: {fontSize: 18, color: '#000', fontWeight: '500'},
  h3: {fontSize: 16, color: '#000', fontWeight: '500'},
  span: {fontSize: 14, color: '#19c563', fontWeight: '600'},
  homeWrapper: {padding: 10, gap: 15, flex: 1, backgroundColor: '#fff'},
  iconContainer: {backgroundColor: '#f1f2f3', padding: 10, borderRadius: 30},

  notificationContainer: {
    position: 'absolute',
    right: 0,
    top: -10,
    backgroundColor: '#19c563',
    borderRadius:30,
    width:20,height:20,
    justifyContent:'center',
    alignItems:'center'
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f3f2',
  },
  bannerContainer: {
    backgroundColor: '#19c563',
    flexDirection: 'row',
    height: 200,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  categoryContainer: {
    marginRight: 10,
    borderColor: '#000',
    borderWidth: 2,
    height: 50,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 70,
  },
  cardContainer: {flexDirection: 'row', gap: 10, flexWrap: 'wrap'},
  card: {
    backgroundColor: '#f1f2f3',
    borderRadius: 20,
    width: width / 2.2,
    padding: 10,
  },
  cta: {
    backgroundColor: '#fff',
    padding: 14,
    width: 160,
    borderRadius: 30,
  },
  ctaText: {
    color: '#19c563',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
