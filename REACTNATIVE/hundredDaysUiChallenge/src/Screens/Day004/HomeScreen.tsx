/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderLeft from '../../Components/HeaderLeft';
import GlobalStyles from '../../Constants/GlobalStyles';
import GlobalColors from '../../Constants/GlobalColors';
import EntIcon from 'react-native-vector-icons/Entypo';
const HomeScreen = () => {
  const weekData = [
    {
      day: 'M',
      color: GlobalColors.grayColor,
    },
    {
      day: 'T',
      color: GlobalColors.grayColor,
    },
    {
      day: 'W',
      color: GlobalColors.grayColor,
    },
    {
      day: 'T',
      color: GlobalColors.primaryColor,
    },
    {
      day: 'F',
      color: GlobalColors.secondryColor,
    },
    {
      day: 'S',
      color: GlobalColors.grayColor,
    },
    {
      day: 'S',
      color: GlobalColors.grayColor,
    },
  ];
  return (
    <>
      <HeaderLeft />
      <SafeAreaView style={styles.homeWrapper}>
        {/* heading start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h1}>Top Activities</Text>
          <Text style={{color: GlobalColors.secondryColor}}>See All</Text>
        </View>

        {/* card start */}
        <ScrollView horizontal>
          <Pressable style={styles.cardContainer}>
            <View style={GlobalStyles.flexRow}>
              <View
                style={{padding: 10, backgroundColor: GlobalColors.blackColor}}>
                <EntIcon name="map" color={GlobalColors.whiteColor} size={20} />
              </View>
              <View>
                <Text style={styles.h2}>Vocabulary</Text>
                <Text style={{color: GlobalColors.whiteColor}}>
                  With Illustration
                </Text>
              </View>
            </View>

            <View style={GlobalStyles.flexBetween}>
              <View>
                <Text style={{color: GlobalColors.whiteColor}}>Words Over</Text>
                <Text style={[styles.h1, {color: GlobalColors.whiteColor}]}>
                  10
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <EntIcon
                  name="chevron-small-right"
                  size={20}
                  color={GlobalColors.whiteColor}
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.cardContainer,
              {backgroundColor: GlobalColors.secondryColor},
            ]}>
            <View style={GlobalStyles.flexRow}>
              <View
                style={{padding: 10, backgroundColor: GlobalColors.blackColor}}>
                <EntIcon
                  name="edit"
                  color={GlobalColors.whiteColor}
                  size={20}
                />
              </View>
              <View>
                <Text style={styles.h2}>Exercise</Text>
                <Text style={{color: GlobalColors.whiteColor}}>
                  With Illustration
                </Text>
              </View>
            </View>

            <View style={GlobalStyles.flexBetween}>
              <View>
                <Text style={{color: GlobalColors.whiteColor}}>Words Over</Text>
                <Text style={[styles.h1, {color: GlobalColors.whiteColor}]}>
                  40
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <EntIcon
                  name="chevron-small-right"
                  size={20}
                  color={GlobalColors.whiteColor}
                />
              </View>
            </View>
          </Pressable>
        </ScrollView>

        {/* heading start */}
        <View style={GlobalStyles.flexBetween}>
          <View>
            <Text style={styles.h1}>Weekly Stats</Text>
            <Text style={styles.h3}>Exercise Done per Day</Text>
          </View>
          <Text style={{color: GlobalColors.secondryColor}}>See All</Text>
        </View>

        {/* weekly stat start */}
        <Pressable style={GlobalStyles.flexRow}>
          {weekData.map((item, index) => (
            <View style={{alignItems: 'center'}} key={index}>
              <View
                style={{
                  width: 45,
                  backgroundColor: item.color,
                  height: 380,
                  borderRadius: 20,
                }}
              />
              <Text style={[styles.h2, {color: GlobalColors.blackColor}]}>
                {item.day}
              </Text>
            </View>
          ))}
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 20, color: GlobalColors.blackColor, fontWeight: '500'},
  h2: {fontSize: 18, color: GlobalColors.whiteColor, fontWeight: '500'},
  h3: {fontSize: 14, fontWeight: '400'},
  homeWrapper: {
    padding: 10,
    backgroundColor: GlobalColors.whiteColor,
    gap: 15,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: GlobalColors.primaryColor,
    width: 250,
    padding: 10,
    borderRadius: 10,
    gap: 70,
    marginRight: 10,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: GlobalColors.secondryColor,
    borderColor: GlobalColors.whiteColor,
    borderWidth: 2,
  },
});
