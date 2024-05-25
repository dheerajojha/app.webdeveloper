import {
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from "@react-navigation/native"
const {height, width} = Dimensions.get('window');

const HomeScreen = () => {
    const navigation:any = useNavigation()
    const[search,setSearch]=useState('')
  interface courseType {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    price: number;
    user: string;
  }

  const [course, setCourse] = useState<courseType[]>([
    {
      id: 1,
      title: 'Stats for your Daily Life',
      description:
        'Statistics is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data. Also, we can say that statistics is a branch of applied mathematics',
      image: require('../../Assets/Images/Day028/pic1.jpg'),
      duration: '7h 32min',
      price: 10,
      user: 'Tenny Jain',
    },
    {
      id: 2,
      title: 'Science for your Daily Life',
      description:
        'Science is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data. Also, we can say that statistics is a branch of applied mathematics',
      image: require('../../Assets/Images/Day028/pic2.jpg'),
      duration: '3h 32min',
      price: 30,
      user: 'Amaara Jain',
    },
    {
      id: 3,
      title: 'Bio for your Daily Life',
      description:
        'Bio is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data. Also, we can say that statistics is a branch of applied mathematics',
      image: require('../../Assets/Images/Day028/pic3.jpg'),
      duration: '8h 32min',
      price: 40,
      user: 'Kenny Jain',
    },
    {
      id: 4,
      title: 'Maths for your Daily Life',
      description:
        'Maths is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data. Also, we can say that statistics is a branch of applied mathematics',
      image: require('../../Assets/Images/Day028/pic4.jpg'),
      duration: '2h 32min',
      price: 20,
      user: 'Jiyan Jain',
    },
    {
      id: 5,
      title: 'Maths for your Daily Life',
      description:
        'Maths is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data. Also, we can say that statistics is a branch of applied mathematics',
      image: require('../../Assets/Images/Day028/pic3.jpg'),
      duration: '2h 32min',
      price: 30,
      user: 'Suniyo Jain',
    },
    {
      id: 6,
      title: 'Maths for your Daily Life',
      description:
        'Maths is the study of the collection, analysis, interpretation, presentation, and organization of data. In other words, it is a mathematical discipline to collect, summarize data. Also, we can say that statistics is a branch of applied mathematics',
      image: require('../../Assets/Images/Day028/pic2.jpg'),
      duration: '5h 32min',
      price: 90,
      user: 'Jones Jain',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#FAF9F6'} barStyle={'dark-content'} />
      {/* header start */}

      <View style={styles.homeWrapper}>
        {/* header start */}
        <View style={GlobalStyles.flexBetween}>
          <FontIcon name="bars" size={24} />
          <AntIcon name="bells" size={24} />
        </View>
        {/* heading search start */}
        <View style={{gap: 10}}>
          <Text>hey @app.webdeveloper👍</Text>
          <Text style={styles.h1}>What would you like to learn Today?</Text>
          <View
            style={[
              GlobalStyles.flexRow,
              {backgroundColor: 'lightgray', padding: 7, borderRadius: 5},
            ]}>
            <AntIcon name="search1" size={20} />
            <TextInput placeholder="Search recent Tasks" value={search} onChangeText={(text)=>setSearch(text)} />
          </View>
        </View>

        <View>
          <Text style={styles.h2}>Popular Class</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={course}
          renderItem={({item, index}) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={()=>navigation.navigate("CourseDetailScreen",{params:item})}>
              <Image
                source={item.image}
                style={{width: '100%', height: '58%', objectFit: 'fill'}}
              />
              <View style={{gap: 8}}>
                <View style={{backgroundColor:'lightblue',padding:5,width:'50%'}}>
                  <Text style={{color:'black'}}>{item.user}</Text>
                </View>
                <Text style={styles.h3} numberOfLines={1}>{item.title}</Text>
                <View style={GlobalStyles.flexBetween}>
                  <Text style={styles.h4}><FontIcon name="stopwatch-20" size={18}/>{" "}{item.duration}</Text>
                  <Text style={styles.h4}>${item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 28, color: 'black', fontWeight: '600', width: '70%'},
  h2: {fontSize: 22, color: 'black', fontWeight: '600'},
  h3: {fontSize: 17, color: 'black', fontWeight: '500'},
  h4: {fontSize: 16, color: 'black', fontWeight: '400'},
  homeWrapper: {padding: 15, gap: 15, backgroundColor: '#FAF9F6', flex: 1},
  card: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    width: 200,
    height: 250,
    gap: 3,
  },
});
