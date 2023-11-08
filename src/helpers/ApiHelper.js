import {
  kApiUrlEndpoint,
  ERROR_NETWORK_NOT_AVAILBLE,
  ERROR_WRONG_CREDENTIALS,
} from '../config/WebService';

class ApiHelper {
  get = async (url, data, headers) => {
    url = kApiUrlEndpoint + url;

    const response = await fetch(url).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  };

  post = () => {};

  put = () => {};

  delete = () => {};

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject(ERROR_WRONG_CREDENTIALS);
      } else if (response.error.code === 'NETWORK_ISSUE') {
        reject(ERROR_NETWORK_NOT_AVAILBLE);
      } else {
        reject(response.error);
      }
    } else {
      resolve(response);
    }
  };
}

export default new ApiHelper();
