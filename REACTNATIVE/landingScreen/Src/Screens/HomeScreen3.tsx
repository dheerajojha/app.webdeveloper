/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
const HomeScreen3: React.FC = () => {
  //   const height: number = Dimensions.get('window').height;
  //   const width: number = Dimensions.get('window').width;
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds(previousTotalSeconds => previousTotalSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds: number): string => {
    const hours: number = Math.floor(timeInSeconds / 3600);
    const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
    const seconds: number = timeInSeconds % 60;
    return `${hours < 10 ? '0' : ''}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };
  return (
    <SafeAreaView style={styles.homeScreen3Wrapper}>
      {/* header start */}
      <View style={styles.flexBetween}>
        <View style={styles.headerButton}>
          <AntIcon name="left" size={24} />
        </View>
        <View style={styles.flexRow1}>
          <AntIcon name="wallet" size={24} />
          <Text>0x760...350ed</Text>
          <AntIcon name="down" size={24} />
        </View>
      </View>

      <View>
        <Text style={styles.h2}>New Exchange Rate in</Text>
        <View style={styles.flexRow1}>
          <Text style={styles.h1}>{formatTime(totalSeconds)}</Text>
          <Text style={{color: '#000'}}>Seconds</Text>
        </View>
      </View>
      {/* main card */}
      <View style={[styles.card, {gap: 50}]}>
        <View style={styles.flexRow1}>
          <Text style={{color: '#000'}}>You Pay</Text>
          <View
            style={{
              position: 'absolute',
              left: '35%',
              top: -12,
              flexDirection: 'row',
            }}>
            <View style={styles.cardButton}>
              <Text style={{padding: 3, color: '#000'}}>Min</Text>
            </View>
            <View style={[styles.cardButton, {backgroundColor: 'yellow'}]}>
              <Text style={{padding: 3, color: '#000'}}>Max</Text>
            </View>
          </View>
        </View>
        <View style={styles.flexBetween}>
          <View style={styles.flexRow1}>
            <View>
              <AntIcon name="wifi" size={20} color={'#000'} />
            </View>
            <Text style={{color: '#000'}}>NNB</Text>
            <AntIcon name="down" size={20} color={'#000'} />
          </View>

          <View>
            <Text style={styles.h1}>3000.00</Text>
          </View>
        </View>

        <Text style={styles.h2}>Balance : 12,3500</Text>
      </View>

      {/* second card */}
      <View style={[styles.card, {backgroundColor: '#000', gap: 50}]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#000',
            width: 80,
            height: 80,
            borderRadius: 50,
            padding: 5,
            position: 'absolute',
            top: -40,
            left: '45%',
            borderWidth: 10,
            borderColor: '#fff',
          }}>
          <AntIcon name="loading1" size={30} color={'#fff'} />
        </View>
        <Text style={{color: '#fff'}}>You Pay</Text>

        <View style={styles.flexBetween}>
          <View style={styles.flexRow1}>
            <View>
              <AntIcon name="user" size={20} color={'#fff'} />
            </View>
            <Text style={{color: '#fff'}}>BNB</Text>
            <AntIcon name="down" size={20} color={'#fff'} />
          </View>

          <View>
            <Text style={[styles.h1, {color: '#fff'}]}>3000.00</Text>
          </View>
        </View>
        <Text style={[styles.h2, {color: '#fff'}]}>Balance : 15,3500</Text>
      </View>
      {/* bottom content */}
      <View style={styles.flexBetween}>
        <View>
          <Text>Exchange Rate</Text>
        </View>
        <View>
          <Text>0.0045BNB</Text>
        </View>
      </View>

      <View style={styles.flexBetween}>
        <View>
          <Text>Network Fees</Text>
        </View>
        <View>
          <Text>0.0045BNB</Text>
        </View>
      </View>
      <View
        style={{
          borderColor: '#000',
          borderWidth: 2,
          borderRadius: 40,
        }}
      />

      <View style={styles.flexBetween}>
        <View>
          <Text>Network Fees</Text>
        </View>
        <View>
          <Text style={styles.h2}>305.98BNB</Text>
        </View>
      </View>

      {/* footer start */}

      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <View
          style={{
            width: 240,
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 15,
            borderRadius: 30,
            gap: 10,
          }}>
          <Image
            source={require('../Assets/Images/footerPic.jpg')}
            style={{width: 30, height: 30, borderRadius: 50}}
          />
          <Text style={{color: '#fff'}}>Swipe</Text>
          <AntIcon name="right" color={'#fff'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen3;

const styles = StyleSheet.create({
  homeScreen3Wrapper: {padding: 10, gap: 20, backgroundColor: '#fff'},
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  h1: {fontSize: 18, fontWeight: '600', color: '#000'},
  h2: {fontSize: 16, fontWeight: '600', color: '#000'},
  card: {
    width: 370,
    height: 190,
    backgroundColor: '#49e1e9',
    borderRadius: 10,
    padding: 10,
  },
  cardButton: {
    backgroundColor: 'pink',
    padding: 5,
    borderColor: '#fff',
    borderWidth: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerButton: {
    borderRadius: 20,
    borderColor: '#000',
    padding: 5,
    borderWidth: 1,
  },
});
