import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import GlobalColors from '../../Constants/GlobalColors';
const {width, height} = Dimensions.get('window');
import AntIcon from 'react-native-vector-icons/AntDesign';
import {SliderBox} from 'react-native-image-slider-box';
import GlobalStyles from '../../Constants/GlobalStyles';

const ProductDetailScreen: React.FC = () => {
  const route: any = useRoute();
  const items = route.params.item;
  console.log(items);

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
          dotStyle={{width: 30}}
        />

        <View style={styles.productDetailContainer}>
          <View style={GlobalStyles.flexBetween}>
            <View>
              <Text style={styles.h1}>{items.title}</Text>
              <AntIcon name="star" />
            </View>
            <View>
              <View style={GlobalStyles.flexRow}>
                <TouchableOpacity style={styles.iconContainer}>
                  <Text>➕</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.iconContainer}>
                  <Text>➕</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text>{items.description}</Text>
        </View>
      </View>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 20, color: GlobalColors.blackColor, fontWeight: '600'},
  productDetailWrapper: {backgroundColor: GlobalColors.bgColor},
  image: {width: width * 0.9, height: height * 0.5, objectFit: 'cover'},
  productDetailContainer: {padding: 20, gap: 10},
  iconContainer: {
    backgroundColor: GlobalColors.grayColor,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
