import { Text, View } from "react-native";
import Login from "../components/Login";
import { auth } from "./../configs/FirebaseConfig";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Index() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        // Redirect to "my trip" page when the user is authenticated
        router.push("/mytrip");
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>; // Show a loading indicator
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
}
