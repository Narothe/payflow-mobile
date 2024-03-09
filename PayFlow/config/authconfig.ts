import {getData} from '../storage/storage.ts';

import { jwtDecode, JwtHeader } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types/types.ts";

export const TOKEN_KEY = 'token-payflow';
export const getToken = (): string | null => {
  getData('token-payflow')
    .then(res => {
      if (res !== undefined) {
        return res;
      }
    })
    .catch(er => console.log(er));
  return null;
};

// export const config = {
//   headers: {
//     Authorization: `Bearer ${getToken()}`,
//   },
// };
// export const isLogged = !isExpired(getData(TOKEN_KEY));

// export const getUser = async (): JwtHeader | null => {
//   const token = await AsyncStorage.getItem('token-payflow');
//   if (token) {
//     return jwtDecode(token);
//   }
//   // return null;
//   // const token = getToken();
//   // if (token != null) {
//   //   return jwtDecode(token);
//   // }
//   // return null;
// };
// const user = jwtDecode(getToken());
// export const user = getData(TOKEN_KEY) && jwtDecode(getData(TOKEN_KEY));
export const getDataFromToken = async ():Promise<User> => {
  const token: string | undefined = await getData(TOKEN_KEY);
  if(token != undefined)
    console.log(jwtDecode(token));
    return jwtDecode(token);
};
export const config = async (): Promise<{ headers: { Authorization: string } }> => {
  const token: string | null = await AsyncStorage.getItem(TOKEN_KEY);
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
  } else {
    throw new Error("Error with token");
  }
};
