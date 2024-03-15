/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import {DetailHeader} from '../../Components/Day008/Header';
import {useRoute} from '@react-navigation/native';
import GlobalStyles from '../../Constants/GlobalStyles';
import AntIcon from 'react-native-vector-icons/AntDesign';
const DetailScreen: React.FC = () => {
  const route: any = useRoute();
  const {item} = route.params;
  return (
    <>
      <DetailHeader />
      <View style={styles.detailWrapper}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.h1}>{item.title}</Text>
            <Text style={{color: GlobalColors.whiteColor}}>
              ⭐ {item.ratings} Ratings
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Text>Free</Text>
            <Text style={[styles.h1, {color: GlobalColors.blackColor}]}>
              ${item.price}
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{height: 300, width: 200, objectFit: 'contain'}}
          />
        </View>
        {/* main content start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h2}>Outline</Text>
          <Text style={styles.h3}>View All</Text>
        </View>
        {/* video start */}
        <TouchableOpacity style={styles.videoContainer}>
          <View style={GlobalStyles.flexRow}>
            <Image source={item.videoImage} style={{height: 50, width: 50}} />
            <View>
              <Text style={styles.h3}>Order of Operation</Text>
              <Text style={{color: GlobalColors.whiteColor}}>
                {item.videoDuration} min
              </Text>
            </View>
          </View>
          <AntIcon name="play" color={GlobalColors.whiteColor} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.cta, GlobalStyles.flexBetween]}>
          <View
            style={{
              backgroundColor: GlobalColors.bgColor,
              padding: 10,
              borderRadius: 5,
            }}>
            <AntIcon name="lock" size={20} color={GlobalColors.whiteColor} />
          </View>
          <Text style={styles.ctaText}>Unlock Course Now</Text>
          <AntIcon name="right" size={20} color={GlobalColors.blackColor} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, color: GlobalColors.whiteColor, fontWeight: '600'},
  h2: {fontSize: 22, fontWeight: '500', color: GlobalColors.whiteColor},
  h3: {fontSize: 16, fontWeight: '400', color: GlobalColors.whiteColor},
  detailWrapper: {
    flex: 1,
    backgroundColor: GlobalColors.bgColor,
    padding: 10,
    gap: 15,
  },
  titleContainer: {
    backgroundColor: GlobalColors.tertiaryColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
  },
  iconContainer: {
    backgroundColor: GlobalColors.primaryColor,
    padding: 10,
    alignItems: 'center',
  },
  videoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalColors.tertiaryColor,
    padding: 10,
  },

  card: {
    backgroundColor: GlobalColors.primaryColor,
    width: 170,
    margin: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    gap: 6,
  },
  cta: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: GlobalColors.primaryColor,
    borderRadius: 3,
    fontSize: 16,
    fontWeight: '600',
  },
  ctaText: {textAlign: 'center', color: GlobalColors.blackColor},
});
