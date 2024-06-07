import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import GlobalStyles from '../../Constants/GlobalStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
const {height, width} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../Redux/Features/Day031/CartSlice';
import {showMessage} from 'react-native-flash-message';

const ProductDetailScreen = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector((state: any) => state.cart31);
  console.log(cart);
  const [iconActive, setIconActive] = useState(false);
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const item = route.params.params;
  const addToCartHandler = (item: any) => {
    dispatch(addToCart(item));
    showMessage({
      type: 'success',
      message: `${item.title} Added to Cart`,
    });
  };
  return (
    <SafeAreaView style={styles.produtDetailWrapper}>
      <ImageBackground
        source={item.image}
        style={{width: width, height: height / 2, padding: 10}}>
        <View style={GlobalStyles.flexBetween}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}>
            <AntIcon name="left" size={20} />
          </TouchableOpacity>
          <Pressable
            style={styles.iconContainer}
            onPress={() => setIconActive(!iconActive)}>
            <AntIcon
              name="heart"
              size={20}
              color={iconActive ? 'red' : 'gray'}
            />
          </Pressable>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.h1}>{item.title}</Text>
        <View style={GlobalStyles.flexBetween}>
          <View style={styles.roundedBox}>
            <Text style={styles.h2}>⭐ {item.rating}</Text>
          </View>

          <View style={styles.roundedBox}>
            <Text>117 Reviews</Text>
          </View>
        </View>
        <Text style={styles.p}>{item.description}</Text>
      </View>

      {/* button price */}
      <View style={[GlobalStyles.flexBetween, styles.absoluteContainer]}>
        <Text style={styles.h1}>${item.price}</Text>
        <TouchableOpacity
          style={GlobalStyles.cta}
          onPress={() => addToCartHandler(item)}>
          <Text style={GlobalStyles.ctaText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 24, color: '#000', fontWeight: '600'},
  h2: {fontSize: 18, color: '#000', fontWeight: '600'},
  p: {fontSize: 16, color: '#000', fontWeight: '400', lineHeight: 22},
  iconContainer: {backgroundColor: '#f1f2f3', padding: 10, borderRadius: 30},
  produtDetailWrapper: {flex: 1, backgroundColor: '#fff'},
  contentContainer: {padding: 20, gap: 15},
  roundedBox: {borderWidth: 1, width: '30%', padding: 10, borderRadius: 30},
  absoluteContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
});
