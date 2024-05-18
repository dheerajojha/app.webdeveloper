import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import GlobalStyles from '../../Constants/GlobalStyles';

const {height, width} = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const [story, setStory] = useState<any>([
    require('../../Assets/Images/Day026/pic1.png'),
    require('../../Assets/Images/Day026/pic2.png'),
    require('../../Assets/Images/Day026/pic3.png'),
    require('../../Assets/Images/Day026/pic4.png'),
    require('../../Assets/Images/Day026/pic5.png'),
  ]);

  interface postsType {
    id: string;
    title: string;
    userPic: string;
    userName: string;
    name: string;
    image: string;
    comments: string[];
    likes: string[];
  }

  const [posts, setPosts] = useState<postsType[]>([
    {
      id: '1',
      title: 'my new pc 1',
      name: 'Mayer Tuku',
      userName: 'Mayer_tuku',
      userPic: require('../../Assets/Images/Day026/pic1.png'),
      image: require('../../Assets/Images/Day026/pic6.jpg'),
      comments: ['some', 'nice', 'good'],
      likes: ['user1', 'user2', 'user3', 'user5', 'user10'],
    },
    {
      id: '2',
      title: 'my new pc 2',
      name: 'Mayer Tuku',
      userName: 'Mayer_tuku',
      userPic: require('../../Assets/Images/Day026/pic2.png'),
      image: require('../../Assets/Images/Day026/pic6.jpg'),
      comments: ['some', 'nice', 'good', 'perfect', 'effective'],
      likes: ['user1', 'user2', 'user3', 'user5', 'user10', 'user20', 'user21'],
    },
    {
      id: '3',
      title: 'my new pc 3',
      name: 'Mayer Tuku',
      userName: 'Mayer_tuku',
      userPic: require('../../Assets/Images/Day026/pic3.png'),
      image: require('../../Assets/Images/Day026/pic6.jpg'),
      comments: ['some', 'nice', 'good', 'cool', 'tpnotch', 'effective'],
      likes: [
        'user1',
        'user2',
        'user3',
        'user5',
        'user10',
        'user22',
        'user40',
        'user60',
        'user',
        'user59',
      ],
    },
  ]);
  const [] = useState();
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <EntIcon name="grid" size={30} color="red" />
        <View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>0</Text>
          </View>
          <AntIcon name="message1" size={24} />
        </View>
      </View>

      {/* story start */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={story}
        renderItem={({item, index}) => (
          <TouchableOpacity style={styles.storyImageContainer} key={index}>
            <Image
              source={item}
              key={index}
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
          </TouchableOpacity>
        )}
      />

      {/* post start */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index} style={styles.card}>
            {/* card header */}
            <View style={GlobalStyles.flexBetween}>
              <View style={GlobalStyles.flexRow}>
                <Image source={item.userPic} style={{width: 40, height: 40,}} />
                <View>
                  <Text style={styles.h1}>{item.name}</Text>
                  <Text>@{item.userName}</Text>
                </View>
              </View>
              <EntIcon name="dots-three-horizontal" size={20} />
            </View>

            {/* card body */}
            <View>
              <Image
                source={item.image}
                style={{
                  borderRadius: 20,
                  width: '100%',
                  height: 320,
                  objectFit: 'contain',
                }}
              />
            </View>

            {/* card footer */}
            <View style={{gap:8}}>
              <View style={GlobalStyles.flexRow}>
                <View style={GlobalStyles.flexRow}>
                  <AntIcon name="heart" size={20} />
                  <Text>{item.likes.length}</Text>
                </View>

                <View style={GlobalStyles.flexRow}>
                  <AntIcon name="message1" size={20} />
                  <Text>{item.comments.length}</Text>
                </View>

                <FeatherIcon name="send" size={20} />
              </View>
              {/* title  */}
              <View style={GlobalStyles.flexRow}>
                <Text style={styles.h2}>{item.name}</Text>
                <Text numberOfLines={2}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 18, fontWeight: '600', color: 'black'},
  h2: {fontSize: 16, fontWeight: '600', color: 'black'},
  homeWrapper: {padding: 15, gap: 20},
  notificationContainer: {
    position: 'absolute',
    right: 0,
    top: -10,
    backgroundColor: 'red',
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  notificationText: {color: 'white', fontSize: 12},
  storyImageContainer: {
    marginRight: 15,
    borderWidth: 2,
    borderRadius: 50,
    width: 80,
    height: 80,
    marginBottom: 20,
    borderColor:'red'
  },
  card: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    width: width * 0.93,
    height: height / 1.8,
    borderRadius: 10,
  },
});
