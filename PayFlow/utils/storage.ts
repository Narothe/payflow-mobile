import AsyncStorage from '@react-native-async-storage/async-storage';
import "core-js/stable/atob";
export const storeData = async (key: string, value: string) => {
  try {
    console.log('before');
    await AsyncStorage.setItem(key, value);
    console.log('aft');
  } catch (e) {
    console.log(`Store date with key: ${key} is not working`);
  }
};

export const getData = async (key: string): Promise<string | null> => {
  try {
    const value: string | null = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Token przed dekodowaniem:', value);
      return value;
    } else {
      console.log(`No data found for key: ${key}`);
      return null;
    }
  } catch (error) {
    console.log(`Error while getting data for key ${key}: ${error}`);
    return null;
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`Get date with key: ${key} is not working`);
  }
};
