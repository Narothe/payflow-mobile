import React from 'react';
import { Text, View } from 'react-native';

interface TextWithLabelProps {
  label: string;
  text: string;
}

const TextWithLabel: React.FC<TextWithLabelProps> = ({ label, text }) => {
  return (
    <View className="w-5/6 p-3 border-b-2 border-quaternary">
      <Text className="text-sm text-gray-800">{label}</Text>
      <Text className="text-xl text-quinary">{text}</Text>
    </View>
  );
};

export default TextWithLabel;
