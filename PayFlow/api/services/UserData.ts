import 'core-js/stable/atob';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';
import {getData} from '../../storage/storage.ts';

import {jwtDecode} from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Address} from '../../types/types.ts';
import { AddressType } from "../../types/enums.ts";

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

export const changeAddress = async (data: Address, type: AddressType) => {
  const token = await AsyncStorage.getItem('token-payflow');
  if (token) {
    const user = JSON.parse(JSON.stringify(jwtDecode(token)));
    axios
      .put(
        `${BASE_URL}/api/v1/user/${user.userId}/address?type=${type}`,
        data,
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
