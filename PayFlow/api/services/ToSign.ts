import axios from 'axios';
import {RegisterInterface} from '../../types/types.ts';
import {BASE_URL} from '../axios.ts';

export const submitRegister = async (data: RegisterInterface) => {
  console.log('heh ' + JSON.stringify(data));
  return await axios.post(`${BASE_URL}/api/v1/auth/register`, data);
};

export const submitLogin = async (login: string, password: string) => {
  return await axios.post(`${BASE_URL}/api/v1/auth/authenticate`, {
    login: login,
    password: password,
  });
};
