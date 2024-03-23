import { NormalTransfer, Transfer, TransferByPhone, User } from "../../types/types.ts";
import {config, getDataFromToken} from '../../config/authconfig.ts';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';

export const getUserTransfers = async () => {
  try {
    const user: User = await getDataFromToken();
    const id: number = user.userId;
    return axios.get(
      `${BASE_URL}/api/v1/users/${id}/transfers`,
      await config(),
    );
  } catch (err) {
    console.error('Error fetching accounts:', err);
  }
};

export const getTransferById = async (id: number) => {
  try {
    return axios.get(`${BASE_URL}/api/v1/transfers/${id}`, await config());
  } catch (err) {
    console.error('Error fetching accounts:', err);
  }
};

export const sendTransferByPhone = async (transfer: TransferByPhone) => {
  try {
    return axios.post(
      `${BASE_URL}/api/v1/transfer/phone-number`,
      transfer,
      await config(),
    );
  } catch (err) {
    console.error('Error fetching accounts:', err);
  }
};
export const sendNormalTransfer = async (transfer: NormalTransfer) => {
  try {
    return axios.post(
      `${BASE_URL}/api/v1/transfer`,
      transfer,
      await config(),
    );
  } catch (err) {
    console.error('Error sending Transfer: ',err);
  }
}
