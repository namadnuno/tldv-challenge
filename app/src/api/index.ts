import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : 'http://localhost:1337/api';

axios.defaults.adapter = require('axios/lib/adapters/http');

const api = axios.create({
  baseURL,
});

export {
  api,
  baseURL,
};
