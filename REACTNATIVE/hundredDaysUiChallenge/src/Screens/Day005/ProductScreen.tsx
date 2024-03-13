/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GlobalColors from '../../Constants/GlobalColors';
import ProductHeader from '../../Components/Day005/ProductHeader';
import GlobalStyles from '../../Constants/GlobalStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const ProductScreen: React.FC = () => {
  const route: any = useRoute();
  const {item} = route.params;

  return (
    <>
      <ProductHeader />
      <SafeAreaView style={styles.productWrapper}>
        {/* image  start*/}
        <View style={{alignItems: 'center'}}>
          <Image source={item.image} style={{width: 300, height: 300}} />
        </View>

        {/* content  start*/}
        <View style={{gap: 20}}>
          <Text style={styles.h1}>{item.title}</Text>
          <View style={GlobalStyles.flexRow}>
            <Text style={[styles.h2, styles.priceContainer]}>
              ${item.price}
            </Text>
            <Text style={styles.h2}>⭐{item.ratings} ratings</Text>
          </View>
          {/* wifi start */}
          <View style={GlobalStyles.flexEvenly}>
            <View style={styles.iconContainer}>
              <AntIcon
                name="wifi"
                color={GlobalColors.primaryColor}
                size={28}
              />
              <Text style={styles.h2}>{item.wifi} Ghz</Text>
            </View>

            <View style={styles.iconContainer}>
              <MaterialIcon
                name="battery-charging"
                color={GlobalColors.primaryColor}
                size={28}
              />
              <Text style={styles.h2}>{item.battery} MH</Text>
            </View>

            <View style={styles.iconContainer}>
              <IonIcon
                name="speedometer-outline"
                color={GlobalColors.primaryColor}
                size={28}
              />
              <Text style={styles.h2}>{item.speed} KMPH</Text>
            </View>
          </View>

          <View>
            <Text style={styles.h1}>Description</Text>
            <Text style={styles.h3}>{item.description}</Text>
          </View>
        </View>

        {/* cta start */}
        <Pressable style={styles.ctaContainer}>
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Buy Now</Text>
          </Pressable>
        </Pressable>
        <Text>ProductScreen</Text>
      </SafeAreaView>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 26, fontWeight: '500', color: GlobalColors.whiteColor},
  h2: {fontSize: 18, fontWeight: '400', color: GlobalColors.whiteColor},
  h3: {fontSize: 16, fontWeight: '300', color: GlobalColors.whiteColor},
  productWrapper: {
    flex: 1,
    backgroundColor: GlobalColors.bgColor,
    padding: 10,
    gap: 20,
  },
  priceContainer: {backgroundColor: 'red', padding: 5, borderRadius: 3},
  iconContainer: {
    flex: 1,
    marginRight: 15,
    borderColor: GlobalColors.primaryColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    gap: 5,
    backgroundColor: GlobalColors.secondryColor,
  },
  ctaContainer: {
    backgroundColor: GlobalColors.secondryColor,
    padding: 10,
    borderRadius: 30,
  },
  cta: {
    backgroundColor: GlobalColors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  ctaText: {
    textAlign: 'center',
    color: GlobalColors.whiteColor,
    fontSize: 16,
    fontWeight: '600',
  },
});
