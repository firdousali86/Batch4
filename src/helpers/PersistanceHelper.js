import AsyncStorage from '@react-native-async-storage/async-storage';
// import EncryptedStorage from 'react-native-encrypted-storage';

class PersistanceHelper {
  accessToken = undefined;

  setValue = (key, value) => {
    try {
      // AsyncStorage.setItem(key, value);
      // EncryptedStorage.setItem(key, value);

      console.log('written successfully');
    } catch (e) {
      console.log(e);
    }
  };

  getValue = async (key, success, failure) => {
    try {
      // const value = await AsyncStorage.getItem(key);
      // const value = await EncryptedStorage.getItem(key);
      // return value;
    } catch (ex) {
      console.log(ex);
    }
  };

  setObject = (key, data) => {
    const stringifiedObject = JSON.stringify(data);

    this.setValue(key, stringifiedObject);
  };

  getObject = async key => {
    const stringifiedObject = await this.getValue(key);

    return JSON.parse(stringifiedObject);
  };
}

export default new PersistanceHelper();
