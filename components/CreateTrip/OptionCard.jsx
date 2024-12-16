import { View, Text } from "react-native";
import React from "react";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View>
      <View>
        <Text>{option?.title}</Text>
        <Text>{option?.desc}</Text>
      </View>
      <Text>{option.icon}</Text>
    </View>
  );
}
