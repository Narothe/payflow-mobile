import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('Store date with key: ${key} is not working');
  }
};

export const getData = async (key: string) => {
  try {
    const value: string | null = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(`Get date with key: ${key} is not working`);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`Get date with key: ${key} is not working`);
  }
};
