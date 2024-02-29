import {getData} from '../utils/storage';

import {jwtDecode} from 'jwt-decode';

export const TOKEN_KEY = 'token-payflow';
export const config = {
  headers: {
    Authorization: `Bearer ${getData(TOKEN_KEY)}`,
  },
};
// export const isLogged = !isExpired(getData(TOKEN_KEY));
// export const user = getData(TOKEN_KEY) && jwtDecode(getData(TOKEN_KEY));
