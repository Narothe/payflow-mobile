/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {BASE_URL} from '../axios.ts';
import { config, getDataFromToken } from "../../config/authconfig.ts";
import { User } from "../../types/types.ts";
import { JwtHeader } from "jwt-decode";
import { AccountNumberType, Currency } from "../../components/common/types.ts";

interface NewAccountData {
  currency: string,
  accountType: string
}
export const getUserAccounts = async () => {
  try {
    const user: User = await getDataFromToken();
    const id: number = user.userId;
    return axios.get(`${BASE_URL}/api/v1/users/${id}/numbers`,await config())
  } catch (err) {
    console.error("Error fetching accounts:", err);
  }
}
export const openNewAccount = async (data: NewAccountData):Promise<void> => {
  try {
    const user: User = await getDataFromToken();
    const id: number = user.userId;
    await axios.post(`${BASE_URL}/api/v1/users/${id}/number`,data)
  } catch (err) {
    console.error("Error sending data: ", err);
  }
}
const handleOpenAccount = async () => {
  try {
    const user: JwtHeader = await getDataFromToken();
    const data = {
      currency: selectedCurrency,
      accountType: selectedType
    }
    console.log(selectedType," ",selectedCurrency)
    await openNewAccount(user,data)
    onClose();
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
