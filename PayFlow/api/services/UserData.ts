import 'core-js/stable/atob';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';
import {getData} from '../../storage/storage.ts';

import {jwtDecode} from 'jwt-decode';
import {getUser} from '../../config/authconfig.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from 'tailwindcss/defaultConfig';

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

export const changeEmail = async (email: string) => {
  const token = await AsyncStorage.getItem('token-payflow');
  if (token) {
    const user = JSON.parse(JSON.stringify(jwtDecode(token)));
    axios
      .patch(
        `${BASE_URL}/api/v1/user/${user.userId}/email`,
        {email: email},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(r => console.log(r.data))
      .catch(er => console.log(er));
  }
};

export const changePhoneNumber = async (phoneNumber: string) => {
  const token = await AsyncStorage.getItem('token-payflow');
  if (token) {
    const user = JSON.parse(JSON.stringify(jwtDecode(token)));
    axios
      .patch(
        `${BASE_URL}/api/v1/user/${user.userId}/phone-number`,
        {phoneNumber: phoneNumber},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(r => console.log(r.data))
      .catch(er => console.log(er));
  }
};
