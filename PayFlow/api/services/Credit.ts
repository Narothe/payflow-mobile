import {config, getDataFromToken} from '../../config/authconfig.ts';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';
import {AddLoanType, User} from '../../types/types.ts';

export const addLoan = async (id: number, loan: AddLoanType) => {
  try {
    return axios.post(
      `${BASE_URL}/api/v1/numbers/${id}/loan`,
      loan,
      await config(),
    );
  } catch (err) {
    console.error('Error fetching accounts:', err);
  }
};

export const getUserLoans = async () => {
  try {
    const user: User = await getDataFromToken();
    const id: number = user.userId;
    return axios.get(
      `${BASE_URL}/api/v1/users/${id}/numbers/loans`,
      await config(),
    );
  } catch (err) {
    console.error('Error fetching accounts:', err);
  }
};
