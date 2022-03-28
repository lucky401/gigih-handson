import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_BASE_URL = process.env.REACT_APP_GIPHY_BASE_URL;

function createResource() {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      if (API_KEY) {
        // eslint-disable-next-line no-param-reassign
        config.params.api_key = API_KEY;
        // eslint-disable-next-line no-param-reassign
        config.params.lang = 'id';
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
}

export default createResource();
