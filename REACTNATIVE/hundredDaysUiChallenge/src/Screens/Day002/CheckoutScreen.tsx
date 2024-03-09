/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import GlobalColors from '../../Constants/GlobalColors';
import AntIcon from 'react-native-vector-icons/AntDesign';
const CheckoutScreen = () => {
  const {width} = Dimensions.get('window');
  return (
    <>
      <Header title="Payment Detail" />
      <View style={styles.contentContainer}>
        <Text style={styles.h3}>Credit Card</Text>
        <AntIcon name="right" size={20} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: GlobalColors.whiteColor,
          paddingVertical: 10,
        }}>
        <Image
          source={require('../../Assets/Images/Day2/pic4.png')}
          style={{
            width: width,
            height: width * 0.6,
            objectFit: 'cover',
          }}
        />
        <Text style={[styles.h3, {color: GlobalColors.primaryColor}]}>
          add new card
        </Text>
      </View>
      <SafeAreaView style={styles.checkOutWrapper}>
        <View style={styles.contentContainer}>
          <Text style={styles.h3}>Google Play</Text>
          <AntIcon name="right" size={20} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.h3}>Debit Card</Text>
          <AntIcon name="right" size={20} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.h3}>Mobile Banking</Text>
          <AntIcon name="right" size={20} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.h3}>Mobile Banking</Text>
          <AntIcon name="right" size={20} />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.h3}>Send Mail</Text>
          <Pressable style={styles.checkboxContainer}>
            <Text style={styles.checkboxCircle} />
          </Pressable>
        </View>

        <Pressable style={styles.cta}>
          <Text style={styles.ctaText}>Pay Now</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  checkOutWrapper: {padding: 10, gap: 10},
  h3: {fontSize: 18, fontWeight: '500', color: GlobalColors.blackColor},
  contentContainer: {
    backgroundColor: GlobalColors.whiteColor,
    padding: 13,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    borderColor: GlobalColors.blackColor,
    borderWidth: 2,
    width: 50,
    height: 30,
    borderRadius: 30,
    position: 'relative',
  },
  checkboxCircle: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: GlobalColors.primaryColor,
  },
  cta: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: GlobalColors.blackColor,
    borderRadius: 20,
    marginTop: 10,
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: GlobalColors.whiteColor,
  },
});
