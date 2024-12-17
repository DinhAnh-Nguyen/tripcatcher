import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        TripCatcher
      </Text>

      <Text
        style={{
          fontSize: 17,
          textAlign: "center",
          color: Colors.GRAY,
          marginTop: 20,
          fontWeight: "bold",
        }}
      >
        Hello Fellow Travellers!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("auth/sign-in")}
      >
        <Text
          style={{ color: Colors.WHITE, textAlign: "center", fontSize: 17 }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "10%",
  },
});
