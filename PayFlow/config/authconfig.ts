import {getData} from '../utils/storage';

import {jwtDecode} from 'jwt-decode';

export const TOKEN_KEY = 'token-payflow';
export const getToken = () => {
  getData('token-payflow')
    .then(res => {
      if (res !== undefined) {
        return res;
      }
    })
    .catch(er => console.log(er));
};

// export const config = {
//   headers: {
//     Authorization: `Bearer ${getToken()}`,
//   },
// };
// export const isLogged = !isExpired(getData(TOKEN_KEY));
// export const user = jwtDecode(getToken());
