import {config} from '../../config/authconfig.ts';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';

export const getBlikCode = async () => {
  try {
    return axios.get(`${BASE_URL}/api/v1/blik`, await config());
  } catch (err) {
    console.error('Error fetching accounts:', err);
  }
};
