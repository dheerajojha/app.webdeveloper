import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from "@react-navigation/native"
const {height, width} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation:any = useNavigation()
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const[search,setSearch]=useState('')

  const [product, setProduct] = useState([
    {
      id: 1,
      categoryId: 1,
      title: 'Pizza num 1',
      description: 'this is some pizza 1 des',
      image: require('../../Assets/Images/Day029/pic1.png'),
      price: 10,
    },
    {
      id: 2,
      categoryId: 1,
      title: 'Pizza num 2',
      description: 'this is some pizza 2 des',
      image: require('../../Assets/Images/Day029/pic2.png'),
      price: 50,
    },
    {
      id: 3,
      categoryId: 1,
      title: 'Pizza num 3',
      description: 'this is some pizza 3 des',
      image: require('../../Assets/Images/Day029/pic3.png'),
      price: 18,
    },
    {
      id: 4,
      categoryId: 1,
      title: 'Pizza num 4',
      description: 'this is some pizza 4 des',
      image: require('../../Assets/Images/Day029/pic4.png'),
      price: 14,
    },
    {
      id: 5,
      categoryId: 2,
      title: 'Burger num 2',
      description: 'this is some Burger 2 des',
      image: require('../../Assets/Images/Day029/pic5.png'),
      price: 20,
    },
    {
      id: 6,
      categoryId: 2,
      title: 'Burger num 3',
      description: 'this is some burger 3 des',
      image: require('../../Assets/Images/Day029/pic6.png'),
      price: 30,
    },
  ]);
  const category = [
    {
      id: 1,
      title: 'Pizza',
    },
    {
      id: 2,
      title: 'Burger',
    },
  ];

  const categoryActive = (id: any) => {
    setActiveCategoryId(id);
  };

  
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <StatusBar backgroundColor={'black'}/>
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <FeatherIcon name="grid" size={20} color="#fff" />
        <AntIcon name="search1" size={20} color="#fff" onPress={()=>navigation.navigate('SearchScreen')} />
      </View>

      {/* title start */}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.h1}>SPACE BURGER</Text>
        <Text style={styles.h2}>COSMIC TASTE...</Text>
      </View>

      {/* category start */}
      <View style={GlobalStyles.flexRow}>
        {category.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => categoryActive(item.id)}>
            <Text
              style={[
                styles.h2,
                activeCategoryId === item.id && {
                  color: '#449086',
                },
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* product start */}
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {product
          .filter(item => item.categoryId === activeCategoryId)
          .map((val, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <View style={{alignSelf:'flex-end',padding:5}}><AntIcon name="heart" color="white"/></View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={val.image}
                  style={{width: 100, height: 120, objectFit: 'fill'}}
                />
              </View>
              {/* card body */}
              <View style={[GlobalStyles.flexBetween,{padding:10}]}>
                <Text style={{color: 'white'}}>{val.title}</Text>
                <Text style={styles.h2}>${val.price}</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#449086',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <AntIcon name="plus" color="white" size={20} />
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, fontWeight: '700', color: '#449086', letterSpacing: 8},
  h2: {fontSize: 20, fontWeight: '400', color: '#fff'},
  homeWrapper: {padding: 10, backgroundColor: '#000000', flex: 1, gap: 15},
  card: {
    backgroundColor: 'gray',
    width: 185,
    height: 240,
    marginRight: 10,
    marginBottom: 30,
    gap: 10,
  },
});
