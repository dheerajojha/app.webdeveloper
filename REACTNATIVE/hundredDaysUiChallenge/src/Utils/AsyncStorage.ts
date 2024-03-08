import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('error in setting item', error);
  }
};

const getItem = async (key: any) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('error in getting item', error);
  }
};
const remoteItem = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('error in removing item', error);
  }
};

export {setItem, getItem, remoteItem};
