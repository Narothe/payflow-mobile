import {decodeToken, isExpired} from 'react-jwt';
import {getData} from '../utils/storage';

export const TOKEN_KEY = 'token-payflow';
export const config = {
  headers: {
    Authorization: `Bearer ${getData(TOKEN_KEY)}`,
  },
};
export const isLogged = !isExpired(getData(TOKEN_KEY));
export const user = decodeToken(getData(TOKEN_KEY));
