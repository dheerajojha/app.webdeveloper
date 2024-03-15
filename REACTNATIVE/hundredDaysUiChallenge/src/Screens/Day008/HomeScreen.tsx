/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../Components/Day008//Header';
import GlobalColors from '../../Constants/GlobalColors';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
const HomeScreen: React.FC = () => {
  const navigation: any = useNavigation();
  type subjectType = {
    title: string;
    image?: string;
    videoTitle: string;
    videoDuration: number;
    videoImage: string;
    price: number;
    rating: number;
  };
  const [subject, setSubject] = useState<subjectType>([
    {
      title: 'Mathmatics',
      price: 14,
      ratings: 4.1,
      image: require('../../Assets/Images/Day008/nine.png'),
      videoTitle: 'Order of operation',
      videoDuration: 1600,
      videoImage: require('../../Assets/Images/Day008/smart-grid.png'),
    },
    {
      title: 'Language',
      price: 19,
      ratings: 4.9,
      image: require('../../Assets/Images/Day008/eng.png'),
      videoTitle: 'Law of operation',
      videoDuration: 1500,
      videoImage: require('../../Assets/Images/Day008/sign-language.png'),
    },
    {
      title: 'Chemistry',
      price: 10,
      ratings: 4.2,
      image: require('../../Assets/Images/Day008/microscope.png'),
      videoTitle: 'Kans of operation',
      videoDuration: 1100,
      videoImage: require('../../Assets/Images/Day008/smart-grid.png'),
    },
    {
      title: 'Biology',
      price: 14,
      ratings: 4.4,
      image: require('../../Assets/Images/Day008/flask.png'),
      videoTitle: 'Peter of operation',
      videoDuration: 1900,
      videoImage: require('../../Assets/Images/Day008/smart-grid.png'),
    },
  ]);
  return (
    <>
      <StatusBar backgroundColor={GlobalColors.bgColor} />
      <Header />
      {/* join start */}
      <View style={styles.homeWrapper}>
        <View style={styles.joinContainer}>
          <View style={{gap: 5}}>
            <Text style={styles.h1}>60% Off</Text>
            <Text>Feb 14 - March 20</Text>
            <Pressable style={styles.cta}>
              <Text style={styles.ctaText}>Join Now</Text>
            </Pressable>
          </View>
          <Image
            source={require('../../Assets/Images/Day008/school-bag.png')}
            style={{width: 100, height: 150}}
          />
        </View>

        {/* subject card start */}

        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h2}>Subject</Text>
          <Text style={styles.h3}>Sell All</Text>
        </View>

        <FlatList
          numColumns={2}
          data={subject}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate('Detail', {item})}>
              <Image source={item.image} style={{width: 100, height: 100}} />
              <Text style={styles.h3}>{item.title}</Text>
              <Text style={styles.h4}>{item.price}/$Month</Text>
              <Text style={styles.p}>⭐{item.ratings}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWrapper: {
    backgroundColor: GlobalColors.bgColor,
    padding: 10,
    gap: 10,
    flex: 1,
  },
  h1: {fontSize: 28, fontWeight: '600', color: GlobalColors.blackColor},
  h2: {fontSize: 22, fontWeight: '500', color: GlobalColors.whiteColor},
  h3: {fontSize: 16, fontWeight: '400', color: GlobalColors.whiteColor},
  h4: {fontSize: 14, fontWeight: '400', color: GlobalColors.whiteColor},
  p: {fontSize: 12, fontWeight: '300', color: GlobalColors.whiteColor},
  joinContainer: {
    backgroundColor: GlobalColors.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  cta: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: GlobalColors.bgColor,
    borderRadius: 3,
  },
  ctaText: {textAlign: 'center', color: GlobalColors.whiteColor},
  card: {
    backgroundColor: GlobalColors.tertiaryColor,
    width: 170,
    margin: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    gap: 6,
  },
});
