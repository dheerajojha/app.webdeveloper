/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import GlobalColors from '../../Constants/GlobalColors';
import LottieView from 'lottie-react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen: React.FC = () => {
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
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.profileWrapper}>
      {/* header start */}
      <View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <AntIcon name="left" size={20} color={GlobalColors.blackColor} />
        </TouchableOpacity>
      </View>

      {/* profile detail start */}
      <View style={styles.lottieContainer}>
        {photo.assets[0].uri === '' ? (
          <LottieView
            source={require('../../Assets/Animations/user.json')}
            style={{width: 200, height: 200}}
            autoPlay={true}
            loop={true}
          />
        ) : (
          <Image
            source={{uri: photo.assets[0].uri}}
            style={{width: 140, height: 200}}
          />
        )}
        <TouchableOpacity
          style={{position: 'absolute', bottom: 30, right: 120}}>
          <AntIcon
            name="camera"
            size={40}
            onPress={() => requestCameraPermission()}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.h1, {textAlign: 'center'}]}>Thomas Mullter</Text>

      {/* profile card start */}
      <View style={styles.card}>
        <View>
          <View style={{gap: 10}}>
            <Text>Phone No</Text>
            <Text style={styles.h2}>+983-293-3902</Text>
          </View>
          <View style={styles.divider} />

          <View style={{gap: 10}}>
            <Text>Email</Text>
            <Text style={styles.h2}>thomas@gmail.com</Text>
          </View>
          <View style={styles.divider} />

          <View style={{gap: 10}}>
            <Text>Address</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Text style={styles.h2}>
                New NorthWitch Zebbie 12/32/4,Plaungui New Land, Xyz Road Kenyra
              </Text>
              <AntIcon
                name="right"
                size={20}
                color={GlobalColors.primaryColor}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, color: GlobalColors.blackColor, fontWeight: '600'},
  h2: {fontSize: 17, color: GlobalColors.blackColor, fontWeight: '500'},
  profileWrapper: {
    padding: 10,
    backgroundColor: GlobalColors.bgColor,
    gap: 15,
    flex: 1,
  },
  iconContainer: {
    backgroundColor: GlobalColors.whiteColor,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  lottieContainer: {
    backgroundColor: GlobalColors.secondryColor,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: GlobalColors.primaryColor,
    alignItems: 'center',
  },
  card: {
    padding: 15,
    backgroundColor: GlobalColors.whiteColor,
    borderRadius: 10,
  },
  divider: {
    borderWidth: 2,
    borderColor: GlobalColors.tertiaryColor,
    marginVertical: 20,
  },
});
