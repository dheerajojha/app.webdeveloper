import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from "@react-navigation/native"
const HomeScreen: React.FC = () => {
  const navigation:any = useNavigation()
  const [activeCategory, setActiveCategory] = useState(1);
  const categoryActiveHandler = (id: any) => {
    setActiveCategory(id);
  };
  const [category, setCategory] = useState([
    {
      id: 1,
      title: 'Camp',
      image: require('../../Assets/Images/Day030/tent.png'),
    },
    {
      id: 2,
      title: 'Mountain',
      image: require('../../Assets/Images/Day030/mountain.png'),
    },
    {
      id: 3,
      title: 'Resort',
      image: require('../../Assets/Images/Day030/resort.png'),
    },
  ]);

  const [trip, setTrip] = useState([
    {
      id: 1,
      categoryId: 1,
      title: 'Banjir Kanal',
      image: require('../../Assets/Images/Day030/pic1.jpg'),
      description:
        'Banjir canal is the beautyfull places situated in the north part of the country, majorly know for its.',
      duration: 4,
      rating: 3,
    },
    {
      id: 2,
      categoryId: 1,
      title: 'Banjir Kanal2',
      image: require('../../Assets/Images/Day030/pic2.jpg'),
      description:
        'Banjir canal is the beautyfull places situated in the north part of the country, majorly know for its.',
      duration: 4,
      rating: 3,
    },
    {
      id: 3,
      categoryId: 2,
      title: 'Banjir Kanal3',
      image: require('../../Assets/Images/Day030/pic3.jpg'),
      description:
        'Banjir canal is the beautyfull places situated in the north part of the country, majorly know for its.',
      duration: 4,
      rating: 3,
    },
    {
      id: 4,
      categoryId: 2,
      title: 'Banjir Kanal4',
      image: require('../../Assets/Images/Day030/pic4.jpg'),
      description:
        'Banjir canal is the beautyfull places situated in the north part of the country, majorly know for its.',
      duration: 4,
      rating: 3,
    },
    {
      id: 5,
      categoryId: 3,
      title: 'Banjir Kanal5',
      image: require('../../Assets/Images/Day030/pic5.jpg'),
      description:
        'Banjir canal is the beautyfull places situated in the north part of the country, majorly know for its.',
      duration: 4,
      rating: 3,
    },
    {
      id: 6,
      categoryId: 3,
      title: 'Banjir Kanal6',
      image: require('../../Assets/Images/Day030/pic6.jpg'),
      description:
        'Banjir canal is the beautyfull places situated in the north part of the country, majorly know for its.',
      duration: 4,
      rating: 3,
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#FAF9F6'} barStyle={'dark-content'} />
      <View style={styles.homeWrapper}>
        {/* header start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h3}>Hi, Jennifer</Text>
          <View style={styles.iconContainer}>
            <AntIcon name="bells" size={20} color="#000" />
          </View>
        </View>

        <Text style={styles.h1}>Where do you want to go?</Text>
        {/* search start */}
        <View style={[GlobalStyles.flexBetween, {backgroundColor: '#fff'}]}>
          <TextInput
            placeholder="Search Your Places..."
            style={{padding: 20}}
          />
          <View style={styles.iconContainer}>
            <AntIcon name="search1" size={20} />
          </View>
        </View>

        {/* category start */}
        <View>
          <Text style={styles.h2}>Categories</Text>
        </View>

        <FlatList
          data={category}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.categoryContainer,
                activeCategory === item.id && {
                  backgroundColor: '#FAF9F6',
                  borderWidth: 2,
                },
              ]}
              onPress={() => categoryActiveHandler(item.id)}>
              <Image
                source={item.image}
                style={{width: 50, height: 50, objectFit: 'cover'}}
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        {/* trip start */}
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h2}>Top Trips</Text>
          <Text>Explore</Text>
        </View>

        <View style={GlobalStyles.flexRow}>
          {trip
            .filter(item => item.categoryId === activeCategory)
            .map(val => (
              <TouchableOpacity key={val.id} style={styles.card} onPress={()=>navigation.navigate("TripDetailScreen",{param:val})}>
                <Image
                  source={val.image}
                  style={{width: '100%', height: 200}}
                />
                <View style={GlobalStyles.flexBetween}>
                  <Text style={styles.h3}>{val.title}</Text>
                  <AntIcon name="heart" size={20} />
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: '700',
    color: '#000',
    lineHeight: 40,
    width: '80%',
  },
  h2: {fontSize: 20, fontWeight: '600', color: '#000'},
  h3: {fontSize: 18, fontWeight: '500', color: '#000'},
  homeWrapper: {padding: 10, gap: 18, backgroundColor: '#FAF9F6'},
  iconContainer: {backgroundColor: '#fff', padding: 10, borderRadius: 30},
  categoryContainer: {
    backgroundColor: '#fff',
    width: 'auto',
    height: 80,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  card: {
    width: 200,
    height: 250,
    padding: 10,
    backgroundColor: '#fff',
    gap: 10,
    borderRadius: 5,
  },
});
