import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Color from '../Utils/Color';
import {useNavigation} from '@react-navigation/native';
const Footer = () => {
  const navigation = useNavigation(); // Access navigation object

  const [activeMenuItem, setActiveMenuItem] = useState<string>('Home');

  const handleMenuItemPress = (name: string, path: string) => {
    setActiveMenuItem(name);
    navigation.navigate(path); // Navigate to the corresponding screen
  };
  type tabType = {
    name: string;
    iconName: string;
    path: string;
    size: number;
    color: string;
  };

  const tabData: tabType[] = [
    {
      name: 'UlxScreen',
      iconName: 'home',
      path: 'Home',
      size: 22,
      color: '',
    },
    {
      name: 'Home1',
      iconName: 'search1',
      path: 'Home2',
      size: 22,
      color: '',
    },
    {
      name: 'UlxAddScreen',
      iconName: 'plus',
      path: 'Home3',
      size: 22,
      color: '',
    },
    {
      name: 'UlxWishList',
      iconName: 'heart',
      path: 'Home4',
      size: 24,
      color: '',
    },
    {
      name: 'Home2',
      iconName: 'user',
      path: 'Home5',
      size: 22,
      color: '',
    },
  ];
  return (
    <View style={styles.footerWrapper}>
      <View style={styles.iconContainer}>
        {tabData.map(item => {
          return (
            <Pressable
              key={item.name}
              style={({pressed}) => [
                styles.menuItem,
                activeMenuItem === item.name && styles.activeMenuItem,
                pressed && {opacity: 0.5}, // Reduce opacity when pressed
              ]}
              onPress={() => handleMenuItemPress(item.name, item.path)}>
              <AntIcon
                name={item.iconName}
                size={item.size}
                color={Color.blackColor}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    width: '90%',
    backgroundColor: Color.whiteColor,
    borderRadius: 10,
  },
  iconContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  activeMenuItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue', // Change this to your desired active color
  },
});
