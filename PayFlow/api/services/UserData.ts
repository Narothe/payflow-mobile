import 'core-js/stable/atob';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';
import {getData} from '../../utils/storage.ts';

import {jwtDecode} from 'jwt-decode';

export const getUserData = async () => {
  return getData('token-payflow')
    .then(async r => {
      if (r !== undefined) {
        const user = jwtDecode(r);
        const res = await axios.get(
          `${BASE_URL}/api/v1/users/${JSON.parse(JSON.stringify(user)).userId}`,
          {
            headers: {
              Authorization: `Bearer ${r}`,
            },
          },
        );
        console.log(JSON.parse(JSON.stringify(res.data)).id);
        return res;
      }
    })
    .catch(er => {
      console.log('Error: ' + er);
      throw er;
    });
};
