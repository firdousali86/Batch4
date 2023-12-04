import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';

class CryptoHelper {
  encryptString = (
    stringToEncrypt,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    return CryptoJS.AES.encrypt(stringToEncrypt, key).toString();
  };

  decryptString = (
    encryptedString,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    var bytes = CryptoJS.AES.decrypt(encryptedString, key);

    return bytes.toString(CryptoJS.enc.Utf8);
  };

  encryptObject = (
    objectToEncrypt,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    return this.encryptString(JSON.stringify(objectToEncrypt), key).toString();
  };

  decryptObject = (
    encryptedObject,
    key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE',
  ) => {
    var bytes = this.decryptString(encryptedObject, key);
    return JSON.parse(bytes);
  };

  generateSHA256 = (message, key = 'THISISMYTESTKEYANDITOUGHTTOBESECURE') => {
    return Base64.stringify(CryptoJS.SHA256(message, key));
  };
}

export default new CryptoHelper();
