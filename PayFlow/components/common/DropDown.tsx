/* eslint-disable */
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { View } from "react-native";

interface Option {
  label: string;
  value: string | number;
}

interface DropDownProps {
  options: Option[];
  onSelect: (value: string) => void;
}

export const DropDown: React.FC<DropDownProps> = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  const handleValueChange = (value: string): void => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <View>
      <SelectList
        placeholder={options[0].label}
        setSelected={handleValueChange}
        data={options}
        save="value"
        search={false}
        inputStyles={{
          fontSize: 14,
          color: 'black',
        }}
        dropdownTextStyles={{
          color: 'black'
        }}
      />
    </View>
  );
};
