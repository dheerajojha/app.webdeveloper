/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderLeft from '../../Components/HeaderLeft';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import GlobalColors from '../../Constants/GlobalColors';
const {width} = Dimensions.get('window');
const UserScreen: React.FC = () => {
  const socialsData: string[] = [
    'instagram',
    'twitter',
    'facebook-f',
    'whatsapp',
  ];

  const galleryData: string[] = [
    require('../../Assets/Images/Day3/pic1.jpg'),
    require('../../Assets/Images/Day3/pic2.jpg'),
    require('../../Assets/Images/Day3/pic3.jpg'),
    require('../../Assets/Images/Day3/pic4.jpg'),
    require('../../Assets/Images/Day3/pic5.jpg'),
    require('../../Assets/Images/Day3/pic6.jpg'),
    require('../../Assets/Images/Day3/pic7.jpg'),
    require('../../Assets/Images/Day3/pic8.jpg'),
    require('../../Assets/Images/Day3/pic9.jpg'),
    require('../../Assets/Images/Day3/pic10.jpg'),
    require('../../Assets/Images/Day3/pic11.jpg'),
    require('../../Assets/Images/Day3/pic12.jpg'),
    require('../../Assets/Images/Day3/pic13.jpg'),
    require('../../Assets/Images/Day3/pic14.jpg'),
    require('../../Assets/Images/Day3/pic15.jpg'),
    require('../../Assets/Images/Day3/pic16.jpg'),
    require('../../Assets/Images/Day3/pic17.jpg'),
    require('../../Assets/Images/Day3/pic18.jpg'),
  ];
  return (
    <>
      <HeaderLeft />
      <ScrollView nestedScrollEnabled>
        <View style={styles.userWrapper}>
          <View style={{alignItems: 'center', gap: 7}}>
            <Image
              source={require('../../Assets/Images/Day3/me.png')}
              style={{width: 120, height: 120, marginTop: 10}}
            />
            <Text style={styles.h1}>Yuzi Kitten</Text>
            <Text style={styles.h2}>App Developer | Daily UI</Text>
          </View>
          {/* socials */}
          <View style={{flexDirection: 'row', gap: 10}}>
            {socialsData.map((item, index) => (
              <Pressable style={styles.iconContainer} key={index}>
                <FontIcon
                  name={item}
                  size={20}
                  color={GlobalColors.primaryColor}
                />
              </Pressable>
            ))}
          </View>

          {/* stats */}
          <View style={styles.statContainer}>
            <View style={styles.stat}>
              <Text style={styles.h1}>12</Text>
              <Text style={styles.h2}>Posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.h1}>11.1K</Text>
              <Text style={styles.h2}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.h1}>1000</Text>
              <Text style={styles.h2}>Following</Text>
            </View>
          </View>

          {/* buttons */}

          <View style={styles.ctaContainer}>
            <Pressable style={styles.cta}>
              <Text style={styles.ctaText}>Message</Text>
            </Pressable>
            <Pressable style={styles.ctaOutline}>
              <Text style={styles.ctaTextOutline}>Follow</Text>
            </Pressable>
          </View>

          {/* gallery */}

          <View>
            <FlatList
              numColumns={3}
              data={galleryData}
              renderItem={({item, index}) => (
                <Image key={index} source={item} style={styles.galleryImage} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 24, fontWeight: '600', color: GlobalColors.blackColor},
  h2: {fontSize: 16, fontWeight: '400', color: GlobalColors.blackColor},
  userWrapper: {
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  iconContainer: {
    padding: 10,
    borderColor: GlobalColors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    width: width * 0.9,
    padding: 10,
    flex: 1,
  },
  stat: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  ctaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  ctaOutline: {
    borderColor: GlobalColors.primaryColor,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    flex: 1,
  },
  cta: {
    backgroundColor: GlobalColors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    flex: 1,
  },
  ctaText: {color: GlobalColors.whiteColor, textAlign: 'center'},
  ctaTextOutline: {color: GlobalColors.blackColor, textAlign: 'center'},
  galleryImage: {
    width: 120,
    height: 120,
    margin: 5,
    borderRadius: 10,
  },
});
