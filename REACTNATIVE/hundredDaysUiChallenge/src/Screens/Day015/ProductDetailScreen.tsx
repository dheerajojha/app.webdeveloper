/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import GlobalColors from '../../Constants/GlobalColors';
const {width, height} = Dimensions.get('window');
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import {SliderBox} from 'react-native-image-slider-box';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementQuantity} from '../../Features/CartSlice';

const ProductDetailScreen: React.FC = () => {
  const dispatch: any = useDispatch();
  const cartItem = useSelector((state: any) => state.cart.cart);
  console.log(cartItem);
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const items = route.params.item;

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <View style={styles.productDetailWrapper}>
        <SliderBox
          images={items.sliderImages}
          autoplay
          circleLoop
          dotColor={GlobalColors.primaryColor}
          inactiveDotColor={GlobalColors.grayColor}
          imageLoadingColor={GlobalColors.primaryColor}
          sliderBoxHeight={height * 0.5}
          dotStyle={{width: 50}}
        />
        {/* header start */}
        <View
          style={[
            GlobalStyles.flexBetween,
            {position: 'absolute', top: 45, width: '100%'},
          ]}>
          {/* left */}
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.goBack()}>
            <AntIcon name="left" size={20} color={GlobalColors.blackColor} />
          </TouchableOpacity>
          {/* right */}
          <TouchableOpacity style={styles.iconContainer}>
            <View style={styles.iconContainer}>
              <EntIcon name="heart" size={20} color={GlobalColors.blackColor} />
            </View>
          </TouchableOpacity>
        </View>

        {/* product detail start */}
        <View style={styles.productDetailContainer}>
          <View style={GlobalStyles.flexBetween}>
            <View style={{gap: 8}}>
              <Text style={styles.h1}>{items.title}</Text>
              <View style={GlobalStyles.flexRow}>
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    <EntIcon name="star" size={20} key={index} />
                  ))}
              </View>
            </View>
            <View>
              <View style={[GlobalStyles.flexRow, {gap: 15}]}>
                <TouchableOpacity style={styles.iconContainer}>
                  <EntIcon name="minus" size={24} />
                </TouchableOpacity>
                <Text>{cartItem[items.id]?.quantity}</Text>
                <TouchableOpacity style={styles.iconContainer}>
                  <EntIcon
                    name="plus"
                    size={24}
                    onPress={() => dispatch(incrementQuantity(items))}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.boxContainer, GlobalStyles.flexBetween]}>
            <Text style={[styles.h2, {color: GlobalColors.blackColor}]}>
              Review
            </Text>
            <View style={styles.textContainer}>
              <Text style={[styles.h2, {color: GlobalColors.whiteColor}]}>
                Description
              </Text>
            </View>
          </View>
          {/* descriptions */}
          <View style={{gap: 15}}>
            <Text>{items.description.slice(0, 200)}</Text>
            <Text>{items.description.slice(201, 400)}</Text>
            <Text>{items.description.slice(449, 660)}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 20, color: GlobalColors.blackColor, fontWeight: '600'},
  h2: {fontSize: 15, fontWeight: '600'},
  productDetailWrapper: {backgroundColor: GlobalColors.bgColor},
  productDetailContainer: {
    padding: 20,
    gap: 15,
    backgroundColor: GlobalColors.whiteColor,
  },
  iconContainer: {
    backgroundColor: GlobalColors.grayColor,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxContainer: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: GlobalColors.grayColor,
  },
  textContainer: {
    backgroundColor: GlobalColors.primaryColor,
    padding: 15,
    borderRadius: 10,
  },
});
