import axios from 'axios';
import {BASE_URL} from '../axios.ts';
import {config, TOKEN_KEY, user} from '../../config/authconfig.ts';
import {getData} from '../../utils/storage.ts';

export const getUserData = async () => {
  console.log(getData(TOKEN_KEY));
  // return await axios.get(`${BASE_URL}/api/v1/users/${user.userId}`, config);
};
