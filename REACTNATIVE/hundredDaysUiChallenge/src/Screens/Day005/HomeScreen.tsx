/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../../Components/Day005/Footer';
import GlobalColors from '../../Constants/GlobalColors';
import Header from '../../Components/Day005/Header';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation: any = useNavigation();
  const [product, setProduct] = useState([
    {
      id: 1,
      title: 'Segway001',
      description:
        'The Mountain Speed Of Segway001 is 2.5 Miles Per Hour(20.1km/h). The Product is Capable Of Covering 100 Miles',
      category: 'smart Scooter',
      liked: false,
      image: require('../../Assets/Images/Day005/pic1.png'),
      ratings: 4.3,
      price: 20000,
      wifi: 2.5,
      battery: 4.4,
      speed: 26,
    },
    {
      id: 2,
      title: 'Segway002',
      category: 'smart Scooter',
      description:
        'The Mountain Speed Of Segway002 is 2.5 Miles Per Hour(20.1km/h). The Product is Capable Of Covering 100 Miles',
      liked: false,
      image: require('../../Assets/Images/Day005/pic2.png'),
      ratings: 4.5,
      price: 24000,
      wifi: 2.5,
      battery: 4.7,
      speed: 18,
    },

    {
      id: 3,
      title: 'Segway003',
      description:
        'The Mountain Speed Of Segway003 is 2.5 Miles Per Hour(20.1km/h). The Product is Capable Of Covering 100 Miles',
      category: 'smart Scooter',
      liked: false,
      image: require('../../Assets/Images/Day005/pic3.png'),
      ratings: 4.8,
      price: 24003,
      wifi: 2.5,
      battery: 4.1,
      speed: 30,
    },
    {
      id: 4,
      title: 'Segway004',
      description:
        'The Mountain Speed Of Segway004 is 2.5 Miles Per Hour(20.1km/h). The Product is Capable Of Covering 100 Miles',
      category: 'smart Scooter',
      liked: false,
      image: require('../../Assets/Images/Day005/pic4.png'),
      ratings: 4.9,
      price: 12000,
      wifi: 2.5,
      battery: 4.9,
      speed: 26,
    },
  ]);

  const toggleLike = (id: number) => {
    setProduct(prevProducts =>
      prevProducts.map(item =>
        item.id === id ? {...item, liked: !item.liked} : item,
      ),
    );
  };
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalColors.bgColor}
      />
      <Header />
      <SafeAreaView style={styles.homeWrapper}>
        {/* heading start */}
        <View style={GlobalStyles.flexBetween}>
          <View>
            <Text style={styles.h1}>Find The Smart</Text>
            <Text style={styles.h2}>Electric Scooter</Text>
            <Text style={styles.h2}>For You</Text>
          </View>
          <View style={styles.iconContainer}>
            <AntIcon name="search1" color={GlobalColors.whiteColor} size={20} />
          </View>
        </View>

        {/* product card start */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={product}
          renderItem={({item}) => (
            <Pressable
              key={item.id}
              style={styles.cardContainer}
              onPress={() => navigation.navigate('Product', {item})}>
              <TouchableOpacity
                onPress={() => toggleLike(item.id)}
                style={[
                  styles.iconContainer2,
                  {
                    alignSelf: 'flex-end',
                    backgroundColor: item.liked
                      ? GlobalColors.primaryColor
                      : GlobalColors.bgColor,
                  },
                ]}>
                <AntIcon name="heart" color={GlobalColors.whiteColor} />
              </TouchableOpacity>
              <Image source={item.image} style={{width: 240, height: 380}} />
              <View style={GlobalStyles.flexBetween}>
                <View>
                  <Text style={styles.h2}>{item.title}</Text>
                  <Text style={styles.h3}>{item.category}</Text>
                </View>
                <View style={styles.iconContainer2}>
                  <AntIcon
                    name="right"
                    color={GlobalColors.primaryColor}
                    size={20}
                  />
                </View>
              </View>
            </Pressable>
          )}
        />
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, fontWeight: '600', color: GlobalColors.whiteColor},
  h2: {fontSize: 18, fontWeight: '600', color: GlobalColors.whiteColor},
  h3: {fontSize: 16, fontWeight: '400', color: GlobalColors.whiteColor},
  homeWrapper: {
    backgroundColor: GlobalColors.bgColor,
    padding: 10,
    gap: 20,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: GlobalColors.secondryColor,
    marginRight: 15,
    padding: 10,
    borderRadius: 10,
    height: 480,
    width: 300,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: GlobalColors.secondryColor,
    borderRadius: 20,
  },
  iconContainer2: {
    padding: 10,
    backgroundColor: GlobalColors.bgColor,
    borderRadius: 20,
  },
});
