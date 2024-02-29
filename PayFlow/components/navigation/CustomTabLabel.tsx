/* eslint-disable */
import React from "react";
import { Text } from "react-native";
import { TabLabelInterface } from "../common/types.ts";
export const CustomTabLabel: React.FC<TabLabelInterface> = ({ label, focused }) => (
  <Text className={focused ? 'text-quinary font-bold' : 'text-quinary'}>{label}</Text>
);
