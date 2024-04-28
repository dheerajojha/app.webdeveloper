import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
const SingleScreen = () => {
  let route: any = useRoute();
  let {item} = route.params;
  console.log(item);

  return (
    <SafeAreaView style={styles.singleWrapper}>
      <ImageBackground source={item.image} style={{flex: 50, height: 400}} />
      <Text>{item.title}</Text>
      <ImageBackground />
      <View style={{flex: 50}}>
        <Text>Overview</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illo
          vel alias, placeat itaque nostrum ut, commodi eum dolorum architecto
          consectetur perspiciatis id quas perferendis. Nisi eius non ex
          adipisci.
        </Text>
        <Pressable>
          <Text>Book Now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SingleScreen;

const styles = StyleSheet.create({
  singleWrapper: {flex: 1},
});
