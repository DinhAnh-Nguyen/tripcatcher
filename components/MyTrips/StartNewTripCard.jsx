import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text>No trips planned yet</Text>

      <Text>
        Looks like its time to plan a new travel experinece! Get Started below
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/search-place")}
      >
        <Text>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  );
}
