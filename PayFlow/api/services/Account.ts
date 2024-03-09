/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {BASE_URL} from '../axios.ts';
import { config, getDataFromToken } from "../../config/authconfig.ts";
import { User } from "../../types/types.ts";

export const getUserAccounts = async () => {
  try {
    const user: User = await getDataFromToken();
    const id: number = user.userId;
    return axios.get(`${BASE_URL}/api/v1/users/${id}/numbers`,await config())
  } catch (err) {
    console.error("Error fetching accounts:", err);
  }r
}
export const openNewAccount = async (user: any,data: any):Promise<AxiosResponse> => {
  const id = user.userId;
  return await axios.post(`${BASE_URL}/api/v1/users/${id}/number`,data)
}
