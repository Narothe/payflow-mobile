import {Control} from 'react-hook-form';

export interface InputInterface {
  control: Control;
  defaultValue?: '';
  name: string;
  placeholder: string;
}

export interface RegisterInterface {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
  city: string;
  street: string;
  homeNumber: string;
  apartmentNumber: string;
  countryAddress: string;
  zipCodeCorrespondence: string;
  cityCorrespondence: string;
  streetCorrespondence: string;
  homeNumberCorrespondence: string;
  apartmentNumberCorrespondence: string;
  countryAddressCorrespondence: string;
  accountType: string;
  password: string;
}

export interface Address {
  id?: number;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  zipCode: string;
  city: string;
  country: string;
}

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  dateOfBirth: string;
  login: string;
  email: string;
  phoneNumber: string;
  correspondenceAddress: Address;
  residentialAddress: Address;
}

export type StackNavigator = {
  Login: undefined;
  Register: undefined;
  PasswordForm: undefined;
  SignResult: undefined;
  MainScreen: undefined;
  Settings: undefined;
  PersonalData: undefined;
  ContactData: undefined;
  HomeAddress: undefined;
  CorrespondenceAddress: undefined;
  AboutUs: undefined;
  ContactUs: undefined;
  History: undefined;
  AccountDetails: {id: number};
};
export type User = {
  userId: number;
  login: string;
  name: string;
};

export type UserAccount = {
  id: number;
  balance: number;
  currency: string;
  accountNumberType: string;
  number: string;
};

export type UserTransfer = {
  id: number;
  date: string;
  amount: string;
  currency: string;
  description: string;
  senderAccountId: number;
  senderFullName: string;
  receiverAccountId: number;
  receiverFullName: string;
  isUserSender: boolean;
};
