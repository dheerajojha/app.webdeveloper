import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
const {height, width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
const HomeScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const [investment, setInvestment] = useState([
    {
      id: 1,
      icon: <AntIcon name="apple1" size={40} color="black" />,
      title: 'Apple Inc Corp',
      rate: 169.1,
      description:
        'Apple inc corporation is American Multinational company which is constructed with the motive of capturing Maximun Profit in short span of time',
    },

    {
      id: 2,
      icon: <AntIcon name="windows" size={40} color="black" />,
      title: 'Microsoft MSFT',
      rate: 169.2,
      description:
        'Microsoft inc corporation is American Multinational company which is constructed with the motive of capturing Maximun Profit in short span of time',
    },

    {
      id: 3,
      icon: <AntIcon name="bank" size={40} color="black" />,
      title: 'Abc Bank Corp',
      rate: 149.1,
      description:
        'Abc Bank inc corporation is American Multinational company which is constructed with the motive of capturing Maximun Profit in short span of time',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.homeWrapper}>
        {/* search start */}
        <View style={[GlobalStyles.flexRow, styles.searchContainer]}>
          <AntIcon name="search1" size={22} />
          <TextInput placeholder="Search" />
        </View>

        {/* featured investemnt start */}
        <View>
          <Text style={styles.h1}>Featured Investment Start</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={investment}
          renderItem={({item, index}) => (
            <TouchableOpacity key={index} style={styles.card}>
              <Text>{item.icon}</Text>
              <Text style={styles.h2}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />

        {/* my portfolio start */}
        <View>
          <Text style={styles.h1}>My Portfolio</Text>
        </View>

        <View style={styles.portfolioContainer}>
          <Text style={{color: 'white', fontSize: 60}}>$10,20,022</Text>
          <Text style={{color: 'green'}}>+$173-387-382</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={investment}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={[styles.listContainer, GlobalStyles.flexBetween]}
              onPress={() => navigation.navigate('InvestmentDetailScreen',{params:item})}>
              <View style={GlobalStyles.flexRow}>
                <View style={styles.iconContainer}>
                  <Text>{item.icon}</Text>
                </View>
                <Text>{item.title}</Text>
              </View>
              <Text style={styles.h2}>${item.rate}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 18, color: 'black', fontWeight: '600'},
  h2: {fontSize: 16, color: 'black', fontWeight: '500'},
  homeWrapper: {padding: 10, gap: 15, flex: 1},
  searchContainer: {backgroundColor: 'white', padding: 8, borderRadius: 5},
  card: {
    backgroundColor: '#ADD8E6',
    marginRight: 10,
    padding: 14,
    width: width / 2,
    height: height / 3,
    gap: 80,
    borderRadius: 5,
  },
  portfolioContainer: {backgroundColor: 'black', padding: 12, borderRadius: 10},
  iconContainer: {backgroundColor: '#ADD8E6', padding: 8, borderRadius: 30},
  listContainer: {marginBottom: 15, backgroundColor: 'white', padding: 10},
});
