/* eslint-disable */
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
export interface TabLabelInterface {
  label: string;
  focused: boolean;
}
export enum Currency {
  PLN,
  EUR,
  USD
}
export enum AccountNumberType {
  STANDARD,
  INTENSIVE
}
export interface AccountInterface {
  id: number;
  number: string;
  currency: Currency;
  balance: number;
  type: AccountNumberType;
}
