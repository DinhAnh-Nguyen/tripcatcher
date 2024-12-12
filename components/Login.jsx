// Landing page with SignIn / SignUp option

import { View, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <View>
        {/* Clicking this button leads you to the auth/sign-in route */}
        <Button
          onPress={() => router.push("auth/sign-in")}
          title="Sign in"
          accessibilityLabel="Sign In Button"
        />
      </View>
      <View>
        {/* Clicking this button leads you to the auth/sign-up route */}
        <Button
          onPress={() => router.push("auth/sign-up")}
          title="Create new account"
          accessibilityLabel="Create New Account Button"
        />
      </View>
    </View>
  );
}
