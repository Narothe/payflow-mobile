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
  Blik: undefined;
  Credits: undefined;
  AddCredits: undefined;
  PhoneTransfer: undefined;
  UpgradeAccount: undefined;
  AccountDetails: {id: number};
  Transaction: {id: number};
  Transfer: undefined;
  Cantor: undefined;
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

export type ShortAddress = {
  country: string;
  zipCode: string;
  city: string;
};

export type TransferAccount = {
  id: number;
  firstName: string;
  lastName: string;
  accountNumber: string;
  address: ShortAddress;
};

export type Transfer = {
  id: number;
  date: string;
  amount: string;
  currency: string;
  description: string;
  sender: TransferAccount;
  receiver: TransferAccount;
};

export enum AccountType {
  STANDARD = 'STANDARD',
  INTENSIVE = 'INTENSIVE',
}

export type TransferByPhone = {
  phoneNumber: string;
  amount: string;
  description: string;
  senderId: number;
};

export type Loan = {
  id?: number;
  amount: number;
  startDate?: string;
  endDate: string;
  interestRate: number;
  idAccountNumber?: number;
};
export type NormalTransfer = {
  senderAccountNumber: string;
  receiverAccountNumber: string;
  amount: string;
  description: string;
}
export type ExchangeTranser = {
  fromAccount: string;
  toAccount: string;
  amount: string;
}
