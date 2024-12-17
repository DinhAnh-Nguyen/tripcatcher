import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "./../../configs/FirebaseConfig";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser; // Get current authenticated user
    if (currentUser) {
      setUser({
        name: currentUser.displayName || "No name set",
        email: currentUser.email,
        avatar: "https://i.pravatar.cc/150",
      });
    } else {
      setUser(null);
    }
  }, []);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No user is logged in.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* User Avatar */}
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      {/* User Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}
// Styles for the Profile component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 5 },
  email: { fontSize: 16, color: "#666", marginBottom: 20 },
  buttonContainer: { marginVertical: 10, width: "80%" },
});
