/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalColors from '../../Constants/GlobalColors';
import GlobalStyles from '../../Constants/GlobalStyles';
const {height, width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  interface screenDataType {
    title: string;
    icon: string;
    href: string;
  }
  const screensData: screenDataType[] = [
    {
      title: 'Hotel',
      icon: 'home',
      href: 'HomeScreen',
    },
    {
      title: 'Market',
      icon: 'shopping-cart',
      href: 'MarketScreen',
    },
    {
      title: 'Coffee',
      icon: 'coffee',
      href: 'CoffeeScreen',
    },
  ];

  interface propertyType {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    wishlist: boolean;
    category: string;
  }
  const [property, setProperty] = useState<propertyType[]>([
    {
      image:
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=&hp=1',
      title: 'The luxury hotel with pool 1',
      description: '2971 wardroom stinger Location town down',
      price: 199.9,
      rating: 2.4,
      wishlist: false,
      category: 'nearby',
    },

    {
      image: 'https://www.savills.co.uk/_images/adobestock-539646437.jpg',
      title: 'The luxury hotel with pool 2',
      description: '1971 wardroom stinger Location town down',
      price: 198.9,
      rating: 4.5,
      wishlist: false,
      category: 'nearby',
    },

    {
      image:
        'https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Lands_End_Mumbai/images/4x3/R&S_WOGLI_Exterior-Master.jpg',
      title: 'The luxury hotel with pool 3',
      description: '2979 wardroom stinger Location town down',
      price: 193.9,
      rating: 3.4,
      wishlist: false,
      category: 'nearby',
    },
    {
      image:
        'https://media-cdn.holidaycheck.com/w_768,h_432,c_fill,q_auto,f_auto/ugc/images/a2029786-9b19-4e95-9801-b37c67283c18',
      title: 'The Dual C hotel with pool 4',
      description: '1971 wardroom stinger Location town down',
      price: 599.9,
      rating: 4.5,
      wishlist: false,
      category: 'popular',
    },

    {
      image:
        'https://www.welcome-hotels.com/site/assets/files/35059/welcome_hotel_marburg_lobby_2k.2560x1600.jpg',
      title: 'The Semi D hotel with pool 5',
      description: '2979 wardroom stinger Location town down',
      price: 499.9,
      rating: 3.4,
      wishlist: false,
      category: 'popular',
    },
    {
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/230920040117-10-50-best-hotels-cnn-travel.jpg?q=w_1110,c_fill',
      title: 'The Fully hotel with pool 6',
      description: '2979 wardroom stinger Location town down',
      price: 299.9,
      rating: 3.4,
      wishlist: false,
      category: 'popular',
    },
  ]);
  return (
    <ScrollView>
      <View style={styles.homeWrapper}>
        {/* // header start */}
        <View style={GlobalStyles.flexBetween}>
          <View>
            <Text>current location</Text>
            <View style={GlobalStyles.flexRow}>
              <IonIcon
                name="location"
                size={20}
                color={GlobalColors.blackColor}
              />
              <Text style={styles.h2}>Shikago, UK</Text>
            </View>
          </View>
          <IonIcon
            name="notifications"
            size={20}
            color={GlobalColors.blackColor}
          />
        </View>

        {/* screens start */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={screensData}
          renderItem={({item, index}) => (
            <TouchableOpacity key={index} style={styles.screenButtonContainer}>
              <FeatherIcon name={item.icon} size={20} />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />

        {/* near by location start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h1}>Near by Location</Text>
          <Text style={styles.h3}>see all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {property
            .filter(fItem => {
              return fItem.category === 'nearby';
            })
            .map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.nearCard}>
                  <Image source={{uri: item.image}} style={styles.nearImage} />
                  <View style={styles.nearCardBody}>
                    <View style={GlobalStyles.flexBetween}>
                      <Text style={[{flex: 1}, styles.h2]}>{item.title}</Text>
                      <Text style={styles.h2}>
                        <AntIcon name="star" color="yellow" size={20} /> {''}
                        {item.rating}
                      </Text>
                    </View>
                    <Text>{item.description}</Text>
                    <Text>
                      <Text style={styles.h2}> ${item.price}</Text>/ Night
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>

        {/* Popular destination start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h1}>Popular Destination</Text>
          <Text style={styles.h3}>see all</Text>
        </View>

        <ScrollView>
          {property
            .filter(fItem => {
              return fItem.category === 'popular';
            })
            .map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.popularCard}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.popularImage}
                  />
                  <View style={styles.popularCardBody}>
                    <View style={GlobalStyles.flexBetween}>
                      <Text style={styles.h2}>{item.title.slice(0, 10)}</Text>
                      <Text>
                        <Text style={styles.h2}> ${item.price}</Text>/ Night
                      </Text>
                    </View>

                    <Text>{item.description.slice(0, 37)}</Text>
                    <Text style={styles.h2}>
                      <AntIcon name="star" color="yellow" size={20} /> {''}
                      {item.rating}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  h1: {fontWeight: '600', color: GlobalColors.blackColor, fontSize: 18},
  h2: {fontWeight: '600', color: GlobalColors.blackColor, fontSize: 16},
  h3: {fontWeight: '600', color: GlobalColors.blackColor, fontSize: 14},
  homeWrapper: {padding: 12, gap: 15},
  screenButtonContainer: {
    // backgroundColor: GlobalColors.blackColor,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    borderWidth: 1,
    borderColor: GlobalColors.grayColor,
    padding: 8,
    borderRadius: 4,
    marginRight: 20,
  },
  nearCard: {
    marginRight: 15,
    gap: 10,
    backgroundColor: GlobalColors.whiteColor,
  },
  nearCardBody: {padding: 10, gap: 8},
  nearImage: {
    width: width / 1.3,
    height: height / 5,
    objectFit: 'cover',
    borderRadius: 4,
  },

  popularCard: {
    width: width * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: GlobalColors.whiteColor,
    marginBottom: 15,
    padding: 5,
    borderRadius: 4,
  },
  popularImage: {
    width: 90,
    height: 90,
    objectFit: 'cover',
    borderRadius: 4,
  },

  popularCardBody: {padding: 10, gap: 8},
});
