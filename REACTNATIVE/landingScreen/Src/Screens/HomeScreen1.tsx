/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FoundationIcon from 'react-native-vector-icons/Foundation';
const HomeScreen1 = () => {
  return (
    <SafeAreaView style={styles.homeWrapper1}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>
          Lets Explore the World
        </Text>
        <FontAwesomeIcon name="wpexplorer" size={24} />
      </View>

      <View style={{gap: 5}}>
        <Text>Search Your Category</Text>
        <TextInput
          placeholder="Search Category"
          style={{borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
        />
      </View>

      <View style={{gap: 5}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={[
              styles.flexRow,
              {
                backgroundColor: 'gray',
                padding: 8,
                width: 160,
                borderRadius: 5,
                marginRight: 10,
              },
            ]}>
            <EntypoIcon name="star-outlined" size={24} />
            <Text>Top 30 Places</Text>
          </View>

          <View
            style={[
              styles.flexRow,
              {
                backgroundColor: 'gray',
                padding: 8,
                width: 160,
                borderRadius: 5,
                marginRight: 10,
              },
            ]}>
            <EntypoIcon name="tree" size={24} />
            <Text>Nature</Text>
          </View>

          <View
            style={[
              styles.flexRow,
              {
                backgroundColor: 'gray',
                padding: 8,
                width: 160,
                borderRadius: 5,
                marginRight: 10,
              },
            ]}>
            <FoundationIcon name="guide-dog" size={24} />
            <Text>Guide</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{gap: 5}}>
        <Text>Popular</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              source={require('../Assets/Images/seoul1.jpg')}
              style={{
                width: 370,
                height: 300,
                borderRadius: 5,
                marginRight: 10,
              }}
            />
            <View style={{position: 'absolute', bottom: 0, padding: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
                Explore Seoul City
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  nesciunt, ab beatae iure
                </Text>
                <Pressable
                  style={{
                    backgroundColor: '#000',
                    borderRadius: 20,
                    padding: 10,
                    width: 100,
                    borderColor: '#fff',
                    borderWidth: 1,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    Explore
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View>
            <Image
              source={require('../Assets/Images/seoul2.jpg')}
              style={{
                width: 370,
                height: 300,
                borderRadius: 5,
                marginRight: 10,
              }}
            />
            <View style={{position: 'absolute', bottom: 0, padding: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
                Explore Seoul City
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  nesciunt, ab beatae iure
                </Text>
                <Pressable
                  style={{
                    backgroundColor: '#000',
                    borderRadius: 20,
                    padding: 10,
                    width: 100,
                    borderColor: '#fff',
                    borderWidth: 1,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    Explore
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen1;

const styles = StyleSheet.create({
  homeWrapper1: {flex: 1, padding: 10, gap: 20},
  flexRow: {flexDirection: 'row', alignItems: 'center', gap: 3},
});
