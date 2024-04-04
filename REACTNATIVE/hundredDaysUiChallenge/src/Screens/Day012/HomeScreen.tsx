/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyles from '../../Constants/GlobalStyles';
import GlobalColors from '../../Constants/GlobalColors';
const {height, width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const graphData = [
    {
      title: 'Feb',
      color: 'green',
      height: 80,
    },
    {
      title: 'Mar',
      color: 'yellow',
      height: 80,
    },
    {
      title: 'Apr',
      color: 'green',
      height: 80,
    },
    {
      title: 'May',
      color: 'yellow',
      height: 80,
    },
    {
      title: 'Jun',
      color: 'green',
      height: 80,
    },
    {
      title: 'Jul',
      color: 'yellow',
      height: 80,
    },
    {
      title: 'Aug',
      color: 'green',
      height: 80,
    },
  ];

  const [upcoming, setUpcoming] = useState([
    {
      title: 'Loretta Hop',
      date: '15 Aug 2023',
      image: require('../../Assets/Images/Day012/man.png'),
      price: 4.053792039329,
    },
    {
      title: 'Lois Sil',
      date: '15 Mar 2023',
      image: require('../../Assets/Images/Day012/man1.png'),
      price: 45.061192039329,
    },
    {
      title: 'Ann Gil',
      date: '12 Jun 2023',
      image: require('../../Assets/Images/Day012/man2.png'),
      price: 83.617492039329,
    },
    {
      title: 'Melvin Byr',
      date: '19 Aug 2023',
      image: require('../../Assets/Images/Day012/woman.png'),
      price: 20.856192039329,
    },
    {
      title: 'Lois Sil',
      date: '15 Mar 2023',
      image: require('../../Assets/Images/Day012/man1.png'),
      price: 45.061192039329,
    },
    {
      title: 'Loretta Hop',
      date: '15 Aug 2023',
      image: require('../../Assets/Images/Day012/man.png'),
      price: 4.053792039329,
    },
  ]);
  return (
    <ScrollView nestedScrollEnabled={true}>
      <StatusBar
        backgroundColor={GlobalColors.whiteColor}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.homeWrapper}>
        {/* header start */}
        <View style={GlobalStyles.flexBetween}>
          <View style={GlobalStyles.flexRow}>
            <Image
              source={require('../../Assets/Images/Day012/man1.png')}
              style={{width: 40, height: 40}}
            />
            <Text style={{fontWeight: '500', color: GlobalColors.blackColor}}>
              Hellow Peter
            </Text>
          </View>

          <View style={styles.icnContainer}>
            <AntIcon name="bells" size={20} />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>This Month Spent</Text>
          <Text style={styles.h1}>$9,0390293</Text>
        </View>

        {/* card start */}
        <View style={styles.card}>
          <View style={GlobalStyles.flexBetween}>
            <View>
              <Text
                style={{
                  color: GlobalColors.whiteColor,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $2,58,15,89
              </Text>
              <Text style={{color: GlobalColors.whiteColor}}>
                Total Transaction
              </Text>
            </View>
            <View style={[GlobalStyles.flexRow, styles.ctaRounded]}>
              <Text style={{color: GlobalColors.whiteColor}}>Monthly</Text>
              <AntIcon name="right" size={16} color={GlobalColors.whiteColor} />
            </View>
          </View>
          {/* graph start */}
          <FlatList
            data={graphData}
            horizontal
            renderItem={({item, index}) => (
              <View
                style={{gap: 10, marginRight: 30, alignItems: 'center'}}
                key={index}>
                <View
                  style={[
                    {
                      height: item.height,
                      backgroundColor: item.color,
                    },
                    styles.progress,
                  ]}
                />
                <Text style={{color: GlobalColors.whiteColor}}>
                  {item.title}
                </Text>
              </View>
            )}
          />
          <View style={GlobalStyles.flexRow}>
            <View style={GlobalStyles.flexRow}>
              <MaterialIcon name="stop-circle" color={'green'} size={16} />
              <Text style={{color: GlobalColors.whiteColor}}>
                Total Expenditure
              </Text>
            </View>
            <View style={GlobalStyles.flexRow}>
              <MaterialIcon name="stop-circle" color={'yellow'} size={16} />
              <Text style={{color: GlobalColors.whiteColor}}>Total Income</Text>
            </View>
          </View>
        </View>

        {/* event list start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h2}>Uplcoming Event</Text>
          <Text>View All</Text>
        </View>
        <FlatList
          data={upcoming}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={[styles.list, GlobalStyles.flexBetween]}>
              <View style={GlobalStyles.flexRow}>
                <Image source={item.image} style={{width: 60, height: 60}} />
                <View>
                  <Text style={styles.h3}>{item.title}</Text>
                  <Text>{item.date}</Text>
                </View>
              </View>
              <Text style={styles.h2}>${item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, fontWeight: '600', color: GlobalColors.blackColor},
  h2: {fontWeight: '600', color: GlobalColors.blackColor, fontSize: 17},
  h3: {fontWeight: '500', color: GlobalColors.blackColor, fontSize: 15},
  homeWrapper: {padding: 10, gap: 15, backgroundColor: GlobalColors.whiteColor},
  icnContainer: {
    backgroundColor: GlobalColors.grayColor,
    padding: 10,
    borderRadius: 20,
  },
  card: {
    backgroundColor: GlobalColors.blackColor,
    width: width * 0.95,
    height: height * 0.32,
    borderRadius: 10,
    padding: 14,
    gap: 20,
  },
  ctaRounded: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 7,
    borderColor: GlobalColors.whiteColor,
  },
  progress: {
    width: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  list: {padding: 10, borderWidth: 1, borderRadius: 4, marginBottom: 10},
});
