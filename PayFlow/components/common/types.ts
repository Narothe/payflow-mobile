import {Control} from 'react-hook-form';

export interface InputInterface {
  control: Control;
  defaultValue?: '';
  name: string;
}
export interface TabLabelInterface {
  label: string;
  focused: boolean;
}
