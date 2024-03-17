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
    console.error('Error creating card:', err);
  }
}
export const activateCard = async (id: number, pin: string) => {
  try {
    return axios.patch(`${BASE_URL}/api/v1/cards/${id}/activate`, {pin: pin}, await config());
  } catch (err) {
    console.error('Error activation card:', err);
  }
}
export const blockCard = async (id: number) => {
  try {
    return axios.patch(`${BASE_URL}/api/v1/cards/${id}/block`, await config());
  } catch (err) {
    console.error('Error blocking card:', err);
  }
}
export const unBlockCard = async (id: number) => {
  try {
    return axios.patch(`${BASE_URL}/api/v1/cards/${id}/unblock`, await config());
  } catch (err) {
    console.error('Error unblocking card:', err);
  }
}
export const changeCardPin = async (id: number, pin: string) => {
  try {
    return axios.patch(`${BASE_URL}/api/v1/cards/${id}/change-pin`, {pin: pin}, await config());
  } catch (err) {
    console.error('Error changing card pin:', err);
  }
}
export const removeCard = async (id: number, pin: string) => {
  try {
    return axios.delete(`${BASE_URL}/api/v1/cards/${id}?pin=${pin}`, await config());
  } catch (err) {
    console.error('Error removing card:', err);
  }
}
