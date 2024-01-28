import axios from 'axios';
import https from 'https';
import config from '../config';

const { SERVER_PROTOCOL, AXIOS_BASE_HOST_PORT } = config[process.env.NODE_ENV || 'development'];

const axiosAPI = axios.create({
  baseURL: `${SERVER_PROTOCOL}://${AXIOS_BASE_HOST_PORT}`,
  withCredentials: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export { axiosAPI };
