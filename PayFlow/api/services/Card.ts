import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {BASE_URL} from '../axios.ts';
import { config, getDataFromToken } from "../../config/authconfig.ts";
import { User } from "../../types/types.ts";

export const getCardByAccountNumber = async (id: number) => {
  try {
    return axios.get(`${BASE_URL}/api/v1/numbers/${id}/card`, await config());
  } catch (err) {
    console.error('Error fetching card:', err);
  }
}
export const createCard = async (id: number) => {
  try {
    return axios.post(`${BASE_URL}/api/v1/numbers/${id}/card`, config());
  } catch (err) {
    console.error('Error creating card')
  }
}
