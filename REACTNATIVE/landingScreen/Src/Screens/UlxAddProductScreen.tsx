/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {CheckBox} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Color from '../Utils/Color';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {addProduct} from '../Redux/UlxAddProductSlice';
const UlxAddProductScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const categories = ['bike', 'car', 'auto'];
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 199756,
        height: 1280,
        originalPath: '',
        type: 'image/jpeg',
        uri: '',
        width: 960,
      },
    ],
  });
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera();
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
      console.log(result);
    }
  };

  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [des, setDes] = useState<string>();

  const addProductHandler = () => {
    dispatch(
      addProduct({
        name: name,
        des: des,
        price: price,
        image: photo.assets[0].uri,
      }),
    );
    console.log('Selected category:', selectedCategory);
    navigation.push('TabNavigation');
  };

  return (
    <SafeAreaView style={styles.ulxAddProduct}>
      <Text style={styles.h1}>Add Product/ Item Here</Text>
      {/* form start */}
      <View style={styles.form}>
        <Pressable onPress={() => requestCameraPermission()}>
          {photo.assets[0].uri === '' ? (
            <Image
              source={require('../Assets/Images/image.png')}
              style={{width: '100%', height: 150, objectFit: 'cover'}}
            />
          ) : (
            <Image
              source={{uri: photo.assets[0].uri}}
              style={{width: '100%', height: 150}}
            />
          )}
        </Pressable>
        <View style={styles.formGroup}>
          <TextInput
            placeholder="Enter Name"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.formGroup}>
          <TextInput
            placeholder="Enter Price"
            onChangeText={text => setPrice(text)}
            value={price}
          />
        </View>
        <View style={styles.formGroup}>
          <TextInput
            placeholder="Enter Des"
            onChangeText={text => setDes(text)}
            value={des}
          />
        </View>
        {/* category start */}
        <View>
          <Text>Select a category:</Text>
          {categories.map(category => (
            <CheckBox
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              checked={selectedCategory === category}
              onPress={() => handleCategoryChange(category)}
            />
          ))}
        </View>
        <Pressable style={styles.cta} onPress={addProductHandler}>
          <Text style={styles.ctaText}>Add Product</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default UlxAddProductScreen;

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: '700',
    color: Color.blackColor,
    textAlign: 'center',
    padding: 10,
  },
  ulxAddProduct: {
    padding: 10,
    backgroundColor: Color.whiteColor,
    gap: 15,
  },
  form: {gap: 20},
  formGroup: {borderColor: Color.grayColor, borderWidth: 1},
  input: {},
  cta: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  ctaText: {
    textAlign: 'center',
    color: Color.whiteColor,
    fontSize: 16,
    fontWeight: '600',
  },
});
