import {
  kApiUrlEndpoint,
  ERROR_NETWORK_NOT_AVAILBLE,
  ERROR_WRONG_CREDENTIALS,
  API_TIMEOUT,
} from '../config/WebService';
import {create} from 'apisauce';

const getUpdatedHeader = headers => {
  return {
    ...headers,
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzJjOTYzNjY5NzU3OGEwNTI5MWM4NWE5MWYyNmFmMSIsInN1YiI6IjY1NDM4MzM0ZTFhZDc5MDE0YmQyMGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huykm4g9c8OAVMFXGW498rMtzZJT2XYKunRmZvinG70',
  };
};

const api = create({
  baseURL: kApiUrlEndpoint,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
  timeout: API_TIMEOUT,
});

class ApiHelper {
  get = async (url, data, headers) => {
    const updatedHeader = getUpdatedHeader(headers);

    const response = await api.get(url, data, {headers: updatedHeader});

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  };

  post = async (url, data, headers = {}) => {
    const updatedHeader = getUpdatedHeader(headers);

    const response = await api.post(url, data, {headers: updatedHeader});

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  };

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
