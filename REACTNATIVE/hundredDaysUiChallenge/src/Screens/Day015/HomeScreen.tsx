/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import GlobalColors from '../../Constants/GlobalColors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/Fontisto';
import GlobalStyles from '../../Constants/GlobalStyles';

const HomeScreen: React.FC = () => {
  interface categoryType {
    image: string;
    title: string;
    count: number;
  }

  const [category, setCategory] = useState<categoryType[]>([
    {
      image: require('../../Assets/Images//Day015/pic6.png'),
      title: 'Headphone',
      count: 15,
    },
    {
      image: require('../../Assets/Images//Day015/pic2.png'),
      title: 'Watch',
      count: 8,
    },
    {
      image: require('../../Assets/Images//Day015/pic3.png'),
      title: 'Accessories',
      count: 30,
    },
    {
      image: require('../../Assets/Images//Day015/pic4.png'),
      title: 'Cameras',
      count: 28,
    },
    {
      image: require('../../Assets/Images//Day015/pic5.png'),
      title: 'Furnitures',
      count: 26,
    },

    {
      image: require('../../Assets/Images//Day015/pic1.png'),
      title: 'CCTV',
      count: 15,
    },
  ]);
  return (
    <>
      <StatusBar
        backgroundColor={GlobalColors.bgColor}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.homeWrapper}>
        {/* header start */}
        <View style={GlobalStyles.flexBetween}>
          {/* left */}
          <View style={GlobalStyles.flexRow}>
            <View style={styles.iconContainer}>
              <IonIcon
                name="location"
                size={20}
                color={GlobalColors.blackColor}
              />
            </View>
            <View style={GlobalStyles.flexRow}>
              <Text style={styles.h1}>Home</Text>
              <AntIcon name="down" size={20} color={GlobalColors.blackColor} />
            </View>
          </View>
          {/* right */}
          <View style={styles.iconContainer}>
            <FeatherIcon
              name="bell"
              size={20}
              color={GlobalColors.blackColor}
            />
            <View style={styles.notificationContainer}>
              <Text style={{color: GlobalColors.whiteColor, fontSize: 10}}>
                0
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
          <Text>Everything You Need</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={category}
          numColumns={2}
          renderItem={({item, index}) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Image source={item.image} />
              <Text style={styles.h2}>{item.title}</Text>
              <View style={styles.textContainer}>
                <Text>{item.count} Items</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 18, fontWeight: '600', color: GlobalColors.blackColor},
  h2: {fontSize: 16, fontWeight: '600', color: GlobalColors.blackColor},
  homeWrapper: {
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
    alignItems: 'center',
    gap: 10,
  },

  textContainer: {
    padding: 10,
    backgroundColor: GlobalColors.tertiaryColor,
    borderRadius: 5,
  },
  filterContainer: {
    backgroundColor: GlobalColors.primaryColor,
    width: 60,
    height: 60,
  },
});
