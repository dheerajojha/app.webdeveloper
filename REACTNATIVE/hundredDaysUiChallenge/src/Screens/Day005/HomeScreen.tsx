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
const HomeScreen = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: 'Segway',
      category: 'smart Scooter',
      liked: false,
      image: require('../../Assets/Images/Day005/pic1.png'),
    },
    {
      id: 2,
      title: 'Segway',
      category: 'smart Scooter',
      liked: false,
      image: require('../../Assets/Images/Day005/pic2.png'),
    },
    {
      id: 3,
      title: 'Segway',
      category: 'smart Scooter',
      liked: false,
      image: require('../../Assets/Images/Day005/pic3.png'),
    },
    {
      id: 4,
      title: 'Segway',
      category: 'smart Scooter',
      liked: false,
      image: require('../../Assets/Images/Day005/pic4.png'),
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
            <Pressable key={item.id} style={styles.cardContainer}>
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
