import { Text, View } from "react-native";
import Login from "../components/Login";
import { auth } from "./../configs/FirebaseConfig";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Index() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // Redirect to "my trip" page when the user is authenticated
        router.push("/mytrip");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>TripCatcher</Text>
      <Text>Hello Fellow Traveller!</Text>
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
}
