/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/Fontisto';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../Features/CartSlice';

const ProductScreen: React.FC = () => {
  const dispatch: any = useDispatch();
  const cartItem = useSelector((state: any) => state.cart.cart);
  console.log(cartItem);

  const navigation: any = useNavigation();
  interface productType {
    id: number;
    image: string;
    title: string;
    category: string;
    wishlist: boolean;
    price: number;
    description: string;
    sliderImages?: any[];
    quantity: number;
  }

  const [product, setProduct] = useState<productType[]>([
    {
      id: 1,
      image: require('../../Assets/Images//Day015/pic7.png'),
      title: 'Sony Dr-ZX1AP',
      category: 'Headphones',
      wishlist: false,
      price: 14,
      sliderImages: [
        require('../../Assets/Images/Day015/pic20.webp'),
        require('../../Assets/Images/Day015/pic21.webp'),
        require('../../Assets/Images/Day015/pic22.webp'),
        require('../../Assets/Images/Day015/pic23.webp'),
        require('../../Assets/Images/Day015/pic24.webp'),
        require('../../Assets/Images/Day015/pic25.webp'),
      ],
      description: `Probuds N31 offers a massive playbacktime of 45+ hours on a single full charge with type-c charging. Thanks to its 280mAh big battery With Fast charge technology, get 12 hours of playtime in just 10 minutes of charge, so get yourself ready to flip through your favourite play list Equipped with Environmental Noise Cancellation feature that helps to capture your voice without background noise and your voice will be heard crystal clear
      Comes with Pro Game Mode that enables user live a lag free life by significantly reducing the delay with the latency as low as 60ms, thereby providing near perfect audio to video sync for an enhanced gaming experience`,
      quantity: 0,
    },

    {
      id: 2,
      image: require('../../Assets/Images//Day015/pic8.png'),
      title: 'Base QuietComfort',
      category: 'Headphones',
      wishlist: false,
      price: 19,
      description: `Probuds N31 offers a massive playbacktime of 45+ hours on a single full charge with type-c charging. Thanks to its 280mAh big battery
      With Fast charge technology, get 12 hours of playtime in just 10 minutes of charge, so get yourself ready to flip through your favourite play list Equipped with Environmental Noise Cancellation feature that helps to capture your voice without background noise and your voice will be heard crystal clear
      Comes with Pro Game Mode that enables user live a lag free life by significantly reducing the delay with the latency as low as 60ms, thereby providing near perfect audio to video sync for an enhanced gaming experience`,
      quantity: 0,
    },
    {
      id: 3,
      image: require('../../Assets/Images//Day015/pic9.png'),
      title: 'Beat XPro',
      category: 'Headphones',
      wishlist: false,
      price: 16,
      description: `Probuds N31 offers a massive playbacktime of 45+ hours on a single full charge with type-c charging. Thanks to its 280mAh big battery
      With Fast charge technology, get 12 hours of playtime in just 10 minutes of charge, so get yourself ready to flip through your favourite play list Equipped with Environmental Noise Cancellation feature that helps to capture your voice without background noise and your voice will be heard crystal clear
      Comes with Pro Game Mode that enables user live a lag free life by significantly reducing the delay with the latency as low as 60ms, thereby providing near perfect audio to video sync for an enhanced gaming experience`,
      quantity: 0,
    },
    {
      id: 4,
      image: require('../../Assets/Images//Day015/pic10.png'),
      title: 'Beat JPro',
      category: 'Headphones',
      wishlist: false,
      price: 10,
      description: `Probuds N31 offers a massive playbacktime of 45+ hours on a single full charge with type-c charging. Thanks to its 280mAh big battery
      With Fast charge technology, get 12 hours of playtime in just 10 minutes of charge, so get yourself ready to flip through your favourite play list Equipped with Environmental Noise Cancellation feature that helps to capture your voice without background noise and your voice will be heard crystal clear
      Comes with Pro Game Mode that enables user live a lag free life by significantly reducing the delay with the latency as low as 60ms, thereby providing near perfect audio to video sync for an enhanced gaming experience`,
      quantity: 0,
    },
    {
      id: 5,
      image: require('../../Assets/Images//Day015/pic11.png'),
      title: 'Beat SPro',
      category: 'Headphones',
      wishlist: false,
      price: 20,
      description: `Probuds N31 offers a massive playbacktime of 45+ hours on a single full charge with type-c charging. Thanks to its 280mAh big battery
      With Fast charge technology, get 12 hours of playtime in just 10 minutes of charge, so get yourself ready to flip through your favourite play list Equipped with Environmental Noise Cancellation feature that helps to capture your voice without background noise and your voice will be heard crystal clear
      Comes with Pro Game Mode that enables user live a lag free life by significantly reducing the delay with the latency as low as 60ms, thereby providing near perfect audio to video sync for an enhanced gaming experience`,
      quantity: 0,
    },

    {
      id: 6,
      image: require('../../Assets/Images//Day015/pic12.png'),
      title: 'Beat HPro',
      category: 'Headphones',
      wishlist: false,
      price: 21,
      description: `Probuds N31 offers a massive playbacktime of 45+ hours on a single full charge with type-c charging. Thanks to its 280mAh big battery
      With Fast charge technology, get 12 hours of playtime in just 10 minutes of charge, so get yourself ready to flip through your favourite play list Equipped with Environmental Noise Cancellation feature that helps to capture your voice without background noise and your voice will be heard crystal clear
      Comes with Pro Game Mode that enables user live a lag free life by significantly reducing the delay with the latency as low as 60ms, thereby providing near perfect audio to video sync for an enhanced gaming experience`,
      quantity: 0,
    },
  ]);
  return (
    <>
      <SafeAreaView style={styles.productWrapper}>
        {/* header start */}

        <View style={GlobalStyles.flexBetween}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}>
            <AntIcon name="left" size={20} color={GlobalColors.blackColor} />
          </TouchableOpacity>
          <Text style={[styles.h1, {textAlign: 'center'}]}>Headphones</Text>
          <View style={styles.iconContainer}>
            <IonIcon name="cart" size={20} color={GlobalColors.blackColor} />
            <View style={styles.notificationContainer}>
              <Text style={{fontSize: 10, color: GlobalColors.whiteColor}}>
                {cartItem.length}
              </Text>
            </View>
          </View>
        </View>

        {/*search/filter start */}

        <View style={GlobalStyles.flexRow}>
          <View style={[GlobalStyles.flexRow, styles.searchContainer]}>
            <AntIcon name="search1" size={20} />
            <TextInput placeholder="Search Item on Store" />
          </View>

          <View style={[styles.iconContainer, styles.filterContainer]}>
            <FontIcon
              name="equalizer"
              size={20}
              color={GlobalColors.whiteColor}
            />
          </View>
        </View>

        {/*category  card start */}
        <View style={GlobalStyles.flexRow}>
          <Text style={styles.h2}>Got Delivered</Text>
          <Text>Every Headphone</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={product}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {item})
              }>
              <AntIcon
                name="heart"
                style={{textAlign: 'right'}}
                size={16}
                color={GlobalColors.grayColor}
              />
              <Image source={item.image} />
              <Text style={styles.h2}>{item.title}</Text>
              <View>
                <Text>{item.category}</Text>
              </View>
              {/* price/cart */}
              <View style={GlobalStyles.flexBetween}>
                <Text style={styles.h2}>${item.price}</Text>
                <TouchableOpacity
                  style={[
                    styles.iconContainer,
                    {backgroundColor: GlobalColors.primaryColor},
                  ]}>
                  <AntIcon
                    name="plus"
                    size={20}
                    color={GlobalColors.whiteColor}
                    onPress={() => dispatch(addToCart(item))}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 24, fontWeight: '700', color: GlobalColors.blackColor},
  h2: {fontSize: 16, fontWeight: '600', color: GlobalColors.blackColor},
  productWrapper: {
    backgroundColor: GlobalColors.bgColor,
    flex: 1,
    padding: 10,
    gap: 20,
  },
  notificationContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: GlobalColors.secondryColor,
    borderRadius: 30,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: GlobalColors.whiteColor,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  notificationContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: GlobalColors.secondryColor,
    borderRadius: 30,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    flex: 2,
  },

  card: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: GlobalColors.whiteColor,
    padding: 10,
    borderRadius: 10,
    gap: 5,
    width: width * 0.46,
    height: height * 0.37,
    borderWidth: 1,
  },

  filterContainer: {
    backgroundColor: GlobalColors.primaryColor,
    width: 60,
    height: 60,
  },
});
