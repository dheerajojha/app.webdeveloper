/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../../Constants/GlobalStyles';
import GlobalColors from '../../Constants/GlobalColors';
import EntIcon from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
const HomeScreen: React.FC = () => {
  const shareData: string[] = ['facebook', 'twitter', 'instagram', 'linkedin'];
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.homeWrapper}>
      <StatusBar backgroundColor={GlobalColors.blueColor} />
      {/* title start */}
      <View style={{gap: 10}}>
        <Text style={styles.h1}>Alien#5271</Text>
        <View style={GlobalStyles.flexRow}>
          <Image
            source={require('../../Assets/Images/Day009/alien.jpg')}
            style={{width: 40, height: 40, borderRadius: 30}}
          />
          <Text style={styles.h2}>Alien Jungle Party</Text>
        </View>
      </View>
      {/* image start */}
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../Assets/Images/Day009/alien.jpg')}
          style={{width: width, height: height * 0.7}}
        />
      </View>

      {/* timer start */}
      <View style={styles.timerContainer}>
        <View style={{flex: 1, gap: 10}}>
          <View style={GlobalStyles.flexRow}>
            <EntIcon name="stopwatch" size={24} />
            <View>
              <Text style={{color: GlobalColors.blackColor}}>Ends In</Text>
              <Text style={styles.h2}>8Hrs 10M</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>Place Bio</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, gap: 10}}>
          <View style={GlobalStyles.flexRow}>
            <EntIcon name="map" size={24} />
            <View>
              <Text style={{color: GlobalColors.blackColor}}>Highest Bid</Text>
              <Text style={styles.h2}>80 ETH</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cta} onPress={() => setVisible(true)}>
            <Text style={styles.ctaText}>Share NFT</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* modal start */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        style={{flex: 1}}>
        <View style={styles.modalContent}>
          <Text style={styles.h1}>Share With Friends</Text>
          <View style={GlobalStyles.flexRow}>
            {shareData.map((item, index) => (
              <View
                key={index}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  borderColor: GlobalColors.blueColor,
                  borderWidth: 1,
                }}>
                <EntIcon name={item} size={20} />
              </View>
            ))}
          </View>

          <View style={{alignSelf: 'flex-start'}}>
            <Text style={styles.h2}>Copy The Link</Text>
            <Text style={{color: GlobalColors.blueColor}}>
              http://www.Alientest.com
            </Text>
          </View>
          <View style={GlobalStyles.flexRow}>
            <TouchableOpacity
              style={[styles.cta, {flex: 1}]}
              onPress={() => setVisible(false)}>
              <Text style={styles.ctaText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cta, {flex: 1}]}
              onPress={() => setVisible(true)}>
              <Text style={styles.ctaText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 22, color: GlobalColors.blackColor, fontWeight: '600'},
  h2: {fontSize: 16, color: GlobalColors.blackColor, fontWeight: '400'},
  homeWrapper: {padding: 10, gap: 15, flex: 1},
  timerContainer: {flexDirection: 'row', flex: 1, gap: 10},
  cta: {
    borderColor: GlobalColors.blueColor,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  ctaText: {textAlign: 'center', fontSize: 16},

  modalContent: {
    backgroundColor: GlobalColors.whiteColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    height: height / 3,
    width: width,
    position: 'absolute',
    bottom: 0,
    gap: 20,
  },
});
