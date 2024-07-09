import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageService = {
  // Get data from AsyncStorage
  getItem: async (key: string) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error getting data from AsyncStorage: ${error}`);
      return null;
    }
  },

  // Set data in AsyncStorage
  setItem: async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error saving data to AsyncStorage: ${error}`);
      return false;
    }
  },

  // Remove data from AsyncStorage
  removeItem: async (key:string) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully from AsyncStorage.');
      return true;
    } catch (error) {
      console.error(`Error removing data from AsyncStorage: ${error}`);
      return false;
    }
  },
};

export default AsyncStorageService;
