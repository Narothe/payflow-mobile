import {config} from '../../config/authconfig.ts';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';

export const getExchangeRatesData = async () => {
  try {
    return axios.get(`${BASE_URL}/api/v1/exchange-rates?last=7`, await config());
  } catch (err) {
    console.error('Error fetching exchange rates data:', err);
  }
}
