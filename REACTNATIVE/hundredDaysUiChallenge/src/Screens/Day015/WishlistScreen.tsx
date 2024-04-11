/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {showMessage} from 'react-native-flash-message';
import {addToCart} from '../../Features/CartSlice';
import {clearWishlist} from '../../Features/WishlistSlice';
const {width, height} = Dimensions.get('window');

const ProductScreen: React.FC = () => {
  const dispatch: any = useDispatch();
  const wishlistItem = useSelector((state: any) => state.wishlist.wishlist);
  const navigation: any = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.cartWrapper}>
        {/* header start */}
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 100}}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}>
            <AntIcon name="left" size={20} color={GlobalColors.blackColor} />
          </TouchableOpacity>
          <Text style={[styles.h1, {textAlign: 'center'}]}>WishList</Text>
        </View>

        {/* wishlist list start */}
        <FlatList
          data={wishlistItem}
          renderItem={({item}) => (
            <Pressable style={styles.card}>
              <View style={styles.image}>
                <Image
                  source={item.image}
                  style={{height: 100, width: 100, objectFit: 'contain'}}
                />
              </View>
              <View style={{gap: 10}}>
                <Text style={styles.h2}>{item.title}</Text>
                <Text>{item.category}</Text>
                {/* price / move to cart start */}
                <View style={[GlobalStyles.flexBetween, {gap: 90}]}>
                  <View>
                    <Text style={styles.h2}>${item.price}</Text>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.cta,
                      {backgroundColor: GlobalColors.primaryColor},
                    ]}
                    onPress={() => dispatch(addToCart(item))}>
                    <Text style={{color: GlobalColors.whiteColor}}>
                      Move to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          )}
        />

        {wishlistItem.length > 0 ? (
          <>
            {/* // before empty cart */}
            <TouchableOpacity
              style={styles.cta}
              onPress={() => dispatch(clearWishlist())}>
              <Text
                style={{color: GlobalColors.whiteColor, textAlign: 'center'}}>
                Clear All
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          // after empty cart
          <View style={{alignItems: 'center'}}>
            <LottieView
              source={require('../../Assets/Animations/emptycart.json')}
              autoPlay={true}
              loop={true}
              style={{width: width, height: height * 0.5}}
            />
            <Text style={styles.h2}>No item in Wishlist</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.cta, {backgroundColor: GlobalColors.primaryColor}]}
          onPress={() => {
            navigation.navigate('ProductScreen');
          }}>
          <Text style={styles.ctaText}>Add More</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 24, fontWeight: '700', color: GlobalColors.blackColor},
  h2: {fontSize: 16, fontWeight: '600', color: GlobalColors.blackColor},
  cartWrapper: {
    backgroundColor: GlobalColors.bgColor,
    padding: 10,
    gap: 20,
  },

  iconContainer: {
    backgroundColor: GlobalColors.whiteColor,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  card: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: GlobalColors.whiteColor,
    padding: 6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {backgroundColor: GlobalColors.grayColor, borderRadius: 5},
  cta: {
    backgroundColor: GlobalColors.secondryColor,
    padding: 12,
    borderRadius: 5,
  },
  ctaText: {
    color: GlobalColors.whiteColor,
    textAlign: 'center',
    fontWeight: '500',
  },
});
