// Sign in page

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = () => {
    if (!email || !password) {
      ToastAndroid.show(
        "Please fill in all required fields",
        ToastAndroid.LONG
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, error.code);

        if (errorCode === "auth/invalid-credential") {
          ToastAndroid.show("Invalid credentials", ToastAndroid.LONG);
        }
      });
  };
  return (
    <View>
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      {/* Sign in form */}
      <Text>Sign In</Text>

      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        ></TextInput>
      </View>

      {/* Sign in button */}
      <View>
        <Button
          onPress={onSignIn}
          title="Sign in"
          accessibilityLabel="Sign In Button"
        />
      </View>

      {/* Create new account button */}
      {/* router.replace(): Let you return to Landing page instead of previous page */}
      <View>
        <Button
          onPress={() => router.replace("auth/sign-up")}
          title="Create new account"
          accessibilityLabel="Create New Account Button"
        />
      </View>
    </View>
  );
}
