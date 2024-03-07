/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {BASE_URL} from '../axios.ts';
import {config, TOKEN_KEY} from '../../config/authconfig.ts';

export const getUserAccounts = async (user: any) => {
  const id = user.userId;
  return await axios.get(`${BASE_URL}/api/v1/users/${id}/numbers`
  )
}
export const openNewAccount = async (user: any,data: any):Promise<AxiosResponse> => {
  const id = user.userId;
  return await axios.post(`${BASE_URL}/api/v1/users/${id}/number`,data)
}
