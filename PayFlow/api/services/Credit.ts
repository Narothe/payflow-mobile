import {config} from '../../config/authconfig.ts';
import axios from 'axios';
import {BASE_URL} from '../axios.ts';
import {AddLoanType} from '../../types/types.ts';

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
